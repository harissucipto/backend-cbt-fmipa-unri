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
};

module.exports = Mutation;
