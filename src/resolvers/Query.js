// const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

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
};

module.exports = Query;
