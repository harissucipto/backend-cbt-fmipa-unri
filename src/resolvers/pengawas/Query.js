const jwt = require('jsonwebtoken');

const Query = {
  async tidakHadirs(parent, args, ctx, info) {
    return ctx.db.query.tidakHadirs(args, info);
  },

  async beritaAcaraUjians(parent, args, ctx, info) {
    return ctx.db.query.beritaAcaraUjians(args, info);
  },
};

module.exports = Query;
