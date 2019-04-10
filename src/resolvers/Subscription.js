const Subscription = {
  ujian: {
    subscribe(parent, args, { db }, info) {
      return db.subscription.ujian(args, info);
    },
  },
  soalMahasiswa: {
    subscribe(parent, args, { db }, info) {
      return db.subscription.soalMahasiswa(args, info);
    },
  },
};

module.exports = Subscription;
