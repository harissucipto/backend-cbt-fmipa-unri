"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "https://cbt-fmipa-ur-5671325706.herokuapp.com/cbt-fmipa-ur/prod"
});
exports.prisma = new exports.Prisma();
