// const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');
const jwt = require('jsonwebtoken');

const queryPengawas = require('./pengawas/Query');

const Query = {
  me(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },

  admin(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }

    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },

  async currentDosen(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }

    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['DOSEN']);

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },

  async currentMahasiswa(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }

    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['MAHASISWA']);

    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },

  async dosens(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.dosens(args, info);
  },

  async dosen(parent, args, ctx, info) {
    // 1. chek hak akses dan login
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 1.2 hak akses bagi admin dan yang punya akun
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN'].includes(permission));

    const dosen = await ctx.db.query.dosen(
      {
        where: { id: args.id },
      },
      info,
    );

    if (!dosen) {
      throw new Error('ID Dosen not valid');
    }

    const ownDosen = dosen.id === args.id;

    if (!(hasPermissions || ownDosen)) {
      throw new Error('You dont have permission to do that');
    }

    return dosen;
  },

  async mahasiswas(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.mahasiswas(args, info);
  },

  async mahasiswa(parent, args, ctx, info) {
    // 1. chek hak akses dan login
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 1.2 hak akses bagi admin dan yang punya akun
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN'].includes(permission));

    const mahasiswa = await ctx.db.query.mahasiswa(
      {
        where: { id: args.id },
      },
      info,
    );

    if (!mahasiswa) {
      throw new Error('ID Mahasiswa not valid');
    }

    const ownMahasiswa = mahasiswa.id === args.id;

    if (!(hasPermissions || ownMahasiswa)) {
      throw new Error('You dont have permission to do that');
    }

    return mahasiswa;
  },

  async mataKuliahs(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.mataKuliahs(args, info);
  },

  async mataKuliahsDosen(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    const idDosen = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      `
        {
          dosen {
            id
          }
        }
      `,
    );

    args.where.AND.push({
      dosen: {
        id: idDosen.dosen.id,
      },
    });

    // 3. if they do, query all the dosens!
    return ctx.db.query.mataKuliahs(args, info);
  },

  async mataKuliah(parent, args, ctx, info) {
    // 1. chek hak akses dan login
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 1.2 hak akses bagi admin dan yang punya akun
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN'].includes(permission));

    const mataKuliah = await ctx.db.query.mataKuliah(
      {
        where: { id: args.id },
      },
      info,
    );

    if (!mataKuliah) {
      throw new Error('ID matakuliah not valid');
    }

    if (!hasPermissions) {
      throw new Error('You dont have permission to do that');
    }

    return mataKuliah;
  },
  async kelases(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.kelases(args, info);
  },

  async kelasesDosen(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const idDosen = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      `
        {
          dosen {
            id
          }
        }
      `,
    );

    args.where.AND.push({
      dosen: {
        id: idDosen.dosen.id,
      },
    });

    console.log(args);
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.kelases(args, info);
  },

  async kelasesMahasiswa(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const idMahasiswa = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      `
        {
          mahasiswa {
            id
          }
        }
      `,
    );

    args.where.AND.push({
      mahasiswas_some: { id: idMahasiswa.mahasiswa.id },
    });

    console.log(args);
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the mahasiswas!
    return ctx.db.query.kelases(args, info);
  },

  async kelas(parent, args, ctx, info) {
    // 1. chek hak akses dan login
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 1.2 hak akses bagi admin dan yang punya akun
    // const hasPermissions = ctx.request.user.permissions.some(permission =>
    //   ['ADMIN'].includes(permission));

    const kelas = await ctx.db.query.kelas(
      {
        where: { id: args.id },
      },
      info,
    );

    // if (!kelas) {
    //   throw new Error('ID matakuliah not valid');
    // }

    // if (!hasPermissions) {
    //   throw new Error('You dont have permission to do that');
    // }

    return kelas;
  },

  async angkatans(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the angkatans!
    return ctx.db.query.angkatans(args, info);
  },

  async bankSoal(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the angkatans!
    return ctx.db.query.bankSoal(args, info);
  },

  async bankSoals(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the angkatans!
    return ctx.db.query.bankSoals(args, info);
  },

  async soal(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the angkatans!
    return ctx.db.query.soal(args, info);
  },

  async ujian(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the angkatans!
    return ctx.db.query.ujian(args, info);
  },

  async ujians(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const idDosen = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      `
        {
          dosen {
            id
          }
        }
      `,
    );

    args.where.AND.push({
      dosen: {
        id: idDosen.dosen.id,
      },
    });

    console.log(args);
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.ujians(args, info);
  },

  async ujiansMahasiswa(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    const idMahasiswa = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      `
        {
          mahasiswa {
            id
          }
        }
      `,
    );

    args.where.AND.push({
      kelas: {
        mahasiswas_some: {
          id: idMahasiswa.mahasiswa.id,
        },
      },
    });

    console.log(args);
    // 2. Check if the user has the permissions to query all the users
    // hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.query.ujians(args, info);
  },

  // aplikasi ujian

  statusUjian(parent, args, ctx, info) {
    console.log(ctx.request.cookies, 'contoh request');
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },

  infoUjian(parent, args, ctx, info) {
    const { userId } = jwt.verify(args.jwt, process.env.APP_SECRET);
    if (!userId) {
      return null;
    }

    const getUjian = ctx.db.query.ujian(
      {
        where: { id: args.id },
      },
      info,
    );

    return getUjian;
  },

  infoPesertaUjian(parent, args, ctx, info) {
    const { userId } = jwt.verify(args.jwt, process.env.APP_SECRET);
    if (!userId) {
      return null;
    }

    const getUser = ctx.db.query.user(
      {
        where: { id: userId },
      },
      `
        {
          id
          email
          mahasiswa {
            id
            nama
            nim
            image
          }
        }
      `,
    );

    return getUser;
  },

  async soalUjianMahasiswa(parent, args, ctx, info) {
    const { userId } = jwt.verify(args.jwt, process.env.APP_SECRET);

    if (!userId) {
      return null;
    }

    const soalUjian = await ctx.db.query.soalMahasiswas(
      {
        where: {
          AND: [
            {
              mahasiswa: {
                user: {
                  id: userId,
                },
              },
            },
            {
              ujian: {
                id: args.id,
              },
            },
          ],
        },
      },
      info,
    );

    return soalUjian[0];
  },

  async getInfosoalMahasiswa(parent, args, ctx, info) {
    console.log(args);
    return await ctx.db.query.soalMahasiswas(args, info);
  },

  ...queryPengawas,
};

module.exports = Query;
