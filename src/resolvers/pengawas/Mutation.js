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
        status
      }
      `,
    );

    if (!statusUjian) {
      throw new Error('Pin Salah');
    }

    if (!statusUjian.status) {
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

  async akhiriUjianPengawas(parent, args, ctx, info) {
    // check jwt
    const { userId } = jwt.verify(args.jwt, process.env.APP_SECRET);
    if (!userId) {
      return null;
    }

    const { idUjian } = args;

    // get all jawabanMahasiswas
    const ujian = await ctx.db.query.ujian(
      { where: { id: idUjian } },
      `
        {
          id
          JumlahSoal
          bankSoal {
            id
            soals {
              id
              kunciJawaban
            }
          }
          soalMahasiswas {
            id
            jawaban {
              idSoal
              jawaban {
                id
                title
              }
            }
          }
        }
      `,
    );

    const { JumlahSoal } = ujian;

    // fn generate model data skor ke db
    const updateSkor = (idSoalMahasiswa, skor = 0) => ({
      where: {
        id: idSoalMahasiswa,
      },
      data: {
        skor,
      },
    });
    const hitungSkor = totalSoal => benar => (benar / totalSoal) * 100;

    // funsgi yang dibutuhkan

    const skorUjian = hitungSkor(JumlahSoal);

    if (ujian.soalMahasiswas.length) {
      const dataSkor = [];

      const { soals } = ujian.bankSoal;

      for (const mahasiswa of ujian.soalMahasiswas) {
        // ambil id mahasiswa
        const { id, jawaban } = mahasiswa;
        // check jawaban
        const totalNilai = jawaban.reduce((acc, lembarJawaban) => {
          const { title } = lembarJawaban.jawaban;
          const nilai =
            soals.find(soal => soal.id === lembarJawaban.idSoal).kunciJawaban === title ? 1 : 0;

          return acc + nilai;
        }, 0);

        if (totalNilai > 0) {
          dataSkor.push(updateSkor(id, skorUjian(totalNilai)));
        }
      }

      return ctx.db.mutation.updateUjian(
        {
          where: { id: idUjian },
          data: {
            soalMahasiswas: {
              update: dataSkor,
            },
            status: false,
          },
        },
        info,
      );
    }

    return null;
  },
};

module.exports = Mutation;
