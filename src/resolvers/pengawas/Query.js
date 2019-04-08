const jwt = require('jsonwebtoken');

const Query = {
  async tidakHadirs(parent, args, ctx, info) {
    return ctx.db.query.tidakHadirs(args, info);
  },
};

module.exports = Query;
