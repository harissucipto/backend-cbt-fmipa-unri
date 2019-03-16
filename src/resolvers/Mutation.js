const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { hasPermission } = require('../utils');

const mutations = {
  // eslint-disable-next-line no-unused-vars
  async signin(parent, { email, password }, ctx, info) {
    // 1. check if ther is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password');
    }
    // 3. generate the JWT Token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // 5. finally we return the user to the browser
    return user;
  },

  async signup(parent, args, ctx, info) {
    // lowercase the email
    const email = args.email.toLowerCase();
    // hash the password
    const password = await bcrypt.hash(args.password, 10);
    // create user in the database
    const [user] = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          email,
          password,
          permissions: { set: ['ADMIN'] },
        },
      },
      info,
    );

    // create JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //  we set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // finally we return the user to the browser
    return user;
  },

  signout(parent, args, ctx) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },

  async updateAdmin(parent, args, ctx, info) {
    // 1. login  punya hak akses dan query user login tersebut
    const { userId } = ctx.request; // salah disini ini untuk perbandingakn argumen jadi bukan ini
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
      id

      email
      admin {
        id
        nama
      }}`,
    );

    if (user.id !== userId) {
      throw new Error('Kamu tidak punya izin akses untuk melakukan ini');
    }

    // console.log(args, 'ini args');

    // // 4. update data

    const updateInfo = await ctx.db.mutation.updateUser(
      {
        where: {
          id: user.id,
        },
        data: {
          ...args.user,
          admin: {
            update: {
              ...args.admin,
            },
          },
        },
      },
      info,
    );

    // 4. return data

    return updateInfo;
  },

  // update Password
  async updatePassword(parent, args, ctx, info) {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    // hash the password
    const password = await bcrypt.hash(args.password, 10);
    // update the password to db
    return ctx.db.mutation.updateUser({
      where: {
        id: ctx.request.userId,
      },
      data: {
        password,
      },
    });
  },
  // dosen query
  async addDosen(parent, args, ctx, info) {
    // 1. login  punya hak akses dan query user login tersebut

    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const currentUser = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        permissions
      }`,
    );

    // 2. cek hak akses untuk menambah akun
    hasPermission(currentUser, ['ADMIN']);

    // \3. kelola password
    const password = await bcrypt.hash(args.user.password, 10);

    const dosen = await ctx.db.mutation.createUser(
      {
        data: {
          ...args.user,
          password,
          passwordKasih: args.user.password,
          permissions: { set: ['USER', 'DOSEN'] },
          dosen: {
            create: {
              ...args.dosen,
            },
          },
        },
      },
      info,
    );

    // 4. return data

    return dosen;
  },

  async deleteDosen(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.dosen({ where }, '{ id  user { id }}');
    // 2. Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN'].includes(permission));

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // // 3. Delete it!
    await ctx.db.mutation.deleteDosen({ where }, info);
    await ctx.db.mutation.deleteUser(
      {
        where: {
          id: item.user.id,
        },
      },
      '{id}',
    );
    return item;
  },

  async updateDosen(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    console.log(args);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.updateDosen(args, info);
  },

  // mahasiswa query

  async addMahasiswa(parent, args, ctx, info) {
    // 1. login  punya hak akses dan query user login tersebut

    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const currentUser = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        permissions
      }`,
    );

    // 2. cek hak akses untuk menambah akun
    hasPermission(currentUser, ['ADMIN']);

    // \3. kelola password
    const password = await bcrypt.hash(args.user.password, 10);

    const mahasiswa = await ctx.db.mutation.createUser(
      {
        data: {
          ...args.user,
          password,
          passwordKasih: args.user.password,
          permissions: { set: ['USER', 'MAHASISWA'] },
          mahasiswa: {
            create: {
              ...args.mahasiswa,
            },
          },
        },
      },
      info,
    );

    // 4. return data

    return mahasiswa;
  },

  async deleteMahasiswa(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the item
    const item = await ctx.db.query.mahasiswa({ where }, '{ id  user { id }}');
    // 2. Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ['ADMIN'].includes(permission));

    if (!ownsItem && !hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    // // 3. Delete it!
    await ctx.db.mutation.deleteMahasiswa({ where }, info);
    await ctx.db.mutation.deleteUser(
      {
        where: {
          id: item.user.id,
        },
      },
      '{id}',
    );
    return item;
  },

  async updateMahasiswa(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    console.log(args);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.updateMahasiswa(args, info);
  },

  // Matakuliah query

  async createMataKuliah(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    console.log(args);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.createMataKuliah(args, info);
  },

  async deleteMataKuliah(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. login  punya hak akses dan query user login tersebut

    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const currentUser = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        permissions
      }`,
    );

    // 2. cek hak akses untuk menambah akun
    hasPermission(currentUser, ['ADMIN']);

    // // 3. Delete it!
    return ctx.db.mutation.deleteMataKuliah({ where }, info);
  },

  async updateMataKuliah(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    console.log(args);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.updateMataKuliah(args, info);
  },

  // Kelas query

  async addKelas(parent, args, ctx, info) {
    // 1. login  punya hak akses dan query user login tersebut

    console.log(args);
    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const currentUser = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        permissions
      }`,
    );

    // 2. cek hak akses untuk menambah akun
    hasPermission(currentUser, ['ADMIN']);

    const kelas = await ctx.db.mutation.createKelas(
      {
        data: {
          ...args.kelas,
          mataKuliah: {
            connect: {
              id: args.idMataKuliah,
            },
          },
          dosen: {
            connect: {
              id: args.idDosen,
            },
          },
        },
      },
      info,
    );

    // 4. return data

    return kelas;
  },

  async deleteKelas(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. login  punya hak akses dan query user login tersebut

    const { userId } = ctx.request;
    if (!userId) throw new Error('Kamu Harus Login dahulu, untuk melakukan aksi ini');
    const currentUser = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        permissions
      }`,
    );

    // 2. cek hak akses untuk menambah akun
    hasPermission(currentUser, ['ADMIN']);

    // // 3. Delete it!
    return ctx.db.mutation.deleteKelas({ where }, info);
  },

  async updateKelas(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.updateKelas(args, info);
  },

  async createUser(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    console.log(args.data, 'data user baru');

    args.data.password = await bcrypt.hash(args.data.password, 10);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.createUser(args, info);
  },

  async createKelas(parent, args, ctx, info) {
    console.log(args, 'ini lagi bikin user');
    // 1. Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }
    // 2. Check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ['ADMIN']);

    // 3. if they do, query all the dosens!
    return ctx.db.mutation.createKelas(args, info);
  },
};

module.exports = mutations;
