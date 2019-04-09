require('moment/locale/id');
const jwt = require('jsonwebtoken');
const moment = require('moment-timezone');
const shortid = require('shortid');

const Mutation = {
  // login ke aplikasi
  async loginPengawas(parent, { pinUjian, pinPengawas }, ctx, info) {
    const [statusUjian] = await ctx.db.query.ujians(
      {
        where: {
          pin: pinUjian,
          pinPengawas,
        },
      },
      `
      {
        id
        tanggalPelaksanaan
        durasiPengerjaan
        ujianSelesai
      }
      `,
    );

    if (!statusUjian) {
      throw new Error('Pin Salah');
    }

    if (statusUjian.ujianSelesai) {
      throw new Error('Ujian telah dilaksankan');
    }

    // 3. generate the JWT Token
    const token = jwt.sign({ userId: pinPengawas }, process.env.APP_SECRET);

    // 5. finally we return the user to the browser
    return {
      jwt: token,
      id: statusUjian.id,
    };
  },

  // login ke aplikasi
  async updatePinUjian(parent, args, ctx, info) {
    const { userId } = jwt.verify(args.jwt, process.env.APP_SECRET);

    if (!userId) {
      throw new Error('Tidak memiliki hak akses!');
    }

    return ctx.db.mutation.updateUjian(
      {
        where: {
          id: args.id,
        },
        data: {
          pin: shortid(),
        },
      },
      info,
    );
  },

  // update tidak hadir
  async updateTidakHadir(parent, args, ctx, info) {
    const { idUjian, idMahasiswa } = args;

    // query tidak hadirs dulu
    const pilihTidakHadir = {
      where: {
        AND: [
          {
            mahasiswa: {
              id: idMahasiswa,
            },
          },
          {
            ujian: {
              id: idUjian,
            },
          },
        ],
      },
    };

    const tidakHadir = await ctx.db.query.tidakHadirs(pilihTidakHadir);

    if (!tidakHadir.length) {
      await ctx.db.mutation.updateUjian(
        {
          where: { id: idUjian },
          data: {
            tidakHadirs: {
              create: {
                mahasiswa: {
                  connect: {
                    id: idMahasiswa,
                  },
                },
              },
            },
          },
        },
        `
        {
          id
        }
      `,
      );
    } else {
      await ctx.db.mutation.deleteManyTidakHadirs(pilihTidakHadir, '{ count }');
    }

    return null;
  },

  // login ke aplikasi
  async updateUjianPengawas(parent, args, ctx, info) {
    return ctx.db.mutation.updateUjian(args, info);
  },

  // update tidak hadir
  async updateBeritaAcara(parent, args, ctx, info) {
    const { idUjian, idMahasiswa, kasus } = args;

    // query tidak hadirs dulu
    const pilihItem = {
      where: {
        AND: [
          {
            mahasiswa: {
              id: idMahasiswa,
            },
          },
          {
            ujian: {
              id: idUjian,
            },
          },
        ],
      },
    };

    let [pilihBerita] = await ctx.db.query.beritaAcaraUjians(pilihItem);

    console.log(pilihBerita, 'pilih berita dulu gan');
    console.log(idUjian, idMahasiswa, kasus);

    // pilih berita dulu

    // jika tidak ada bikin dummy
    if (!pilihBerita) {
      pilihBerita = {
        id: 'first',
        [kasus]: false,
      };
    }

    const updateUjian = await ctx.db.mutation.updateUjian(
      {
        where: { id: idUjian },
        data: {
          beritaAcaraUjian: {
            upsert: {
              where: {
                id: pilihBerita.id,
              },
              create: {
                mahasiswa: {
                  connect: {
                    id: idMahasiswa,
                  },
                },
                [kasus]: true,
              },
              update: {
                [kasus]: !pilihBerita[kasus],
              },
            },
          },
        },
      },
      `{
        id
        beritaAcaraUjian {
          id
          teralambat
          wajah
          sakit
          menyontek
          alatDilarang
        }
      }`,
    );

    // hapus berita acara letola mahasiswa tdak
    const [tidakTerlibat] = updateUjian.beritaAcaraUjian.filter((berita) => {
      const {
        teralambat, wajah, sakit, menyontek, alatDilarang,
      } = berita;
      return !teralambat && !wajah && !sakit && !menyontek && !alatDilarang;
    });

    if (tidakTerlibat) {
      await ctx.db.mutation.deleteManyBeritaAcaraUjians(pilihItem, '{ count }');
    }

    return null;
  },
};

module.exports = Mutation;
