module.exports = {
        typeDefs: /* GraphQL */ `type Admin {
  id: ID!
  nama: String!
  user: User!
  image: String
}

type AdminConnection {
  pageInfo: PageInfo!
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  nama: String!
  user: UserCreateOneWithoutAdminInput!
  image: String
}

input AdminCreateOneWithoutUserInput {
  create: AdminCreateWithoutUserInput
  connect: AdminWhereUniqueInput
}

input AdminCreateWithoutUserInput {
  nama: String!
  image: String
}

type AdminEdge {
  node: Admin!
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdminPreviousValues {
  id: ID!
  nama: String!
  image: String
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
  AND: [AdminSubscriptionWhereInput!]
  OR: [AdminSubscriptionWhereInput!]
  NOT: [AdminSubscriptionWhereInput!]
}

input AdminUpdateInput {
  nama: String
  user: UserUpdateOneRequiredWithoutAdminInput
  image: String
}

input AdminUpdateOneWithoutUserInput {
  create: AdminCreateWithoutUserInput
  update: AdminUpdateWithoutUserDataInput
  upsert: AdminUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: AdminWhereUniqueInput
}

input AdminUpdateWithoutUserDataInput {
  nama: String
  image: String
}

input AdminUpsertWithoutUserInput {
  update: AdminUpdateWithoutUserDataInput!
  create: AdminCreateWithoutUserInput!
}

input AdminWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [AdminWhereInput!]
  OR: [AdminWhereInput!]
  NOT: [AdminWhereInput!]
}

input AdminWhereUniqueInput {
  id: ID
}

type AggregateAdmin {
  count: Int!
}

type AggregateAngkatan {
  count: Int!
}

type AggregateBankSoal {
  count: Int!
}

type AggregateDosen {
  count: Int!
}

type AggregateJawaban {
  count: Int!
}

type AggregateJawabanMahasiswa {
  count: Int!
}

type AggregateJurusan {
  count: Int!
}

type AggregateKelas {
  count: Int!
}

type AggregateMahasiswa {
  count: Int!
}

type AggregateMataKuliah {
  count: Int!
}

type AggregateProdi {
  count: Int!
}

type AggregateSkor {
  count: Int!
}

type AggregateSoal {
  count: Int!
}

type AggregateSoalMahasiswa {
  count: Int!
}

type AggregateTidakHadir {
  count: Int!
}

type AggregateUjian {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Angkatan {
  id: ID!
  nama: String!
}

type AngkatanConnection {
  pageInfo: PageInfo!
  edges: [AngkatanEdge]!
  aggregate: AggregateAngkatan!
}

input AngkatanCreateInput {
  nama: String!
}

type AngkatanEdge {
  node: Angkatan!
  cursor: String!
}

enum AngkatanOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AngkatanPreviousValues {
  id: ID!
  nama: String!
}

type AngkatanSubscriptionPayload {
  mutation: MutationType!
  node: Angkatan
  updatedFields: [String!]
  previousValues: AngkatanPreviousValues
}

input AngkatanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AngkatanWhereInput
  AND: [AngkatanSubscriptionWhereInput!]
  OR: [AngkatanSubscriptionWhereInput!]
  NOT: [AngkatanSubscriptionWhereInput!]
}

input AngkatanUpdateInput {
  nama: String
}

input AngkatanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  AND: [AngkatanWhereInput!]
  OR: [AngkatanWhereInput!]
  NOT: [AngkatanWhereInput!]
}

input AngkatanWhereUniqueInput {
  id: ID
  nama: String
}

type BankSoal {
  id: ID!
  prodi: Prodi!
  nama: String!
  mataKuliah: MataKuliah
  dosen: Dosen
  soals(where: SoalWhereInput, orderBy: SoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Soal!]
}

type BankSoalConnection {
  pageInfo: PageInfo!
  edges: [BankSoalEdge]!
  aggregate: AggregateBankSoal!
}

input BankSoalCreateInput {
  prodi: ProdiCreateOneInput!
  nama: String!
  mataKuliah: MataKuliahCreateOneInput
  dosen: DosenCreateOneInput
  soals: SoalCreateManyWithoutBankSoalInput
}

input BankSoalCreateOneInput {
  create: BankSoalCreateInput
  connect: BankSoalWhereUniqueInput
}

input BankSoalCreateOneWithoutSoalsInput {
  create: BankSoalCreateWithoutSoalsInput
  connect: BankSoalWhereUniqueInput
}

input BankSoalCreateWithoutSoalsInput {
  prodi: ProdiCreateOneInput!
  nama: String!
  mataKuliah: MataKuliahCreateOneInput
  dosen: DosenCreateOneInput
}

type BankSoalEdge {
  node: BankSoal!
  cursor: String!
}

enum BankSoalOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BankSoalPreviousValues {
  id: ID!
  nama: String!
}

type BankSoalSubscriptionPayload {
  mutation: MutationType!
  node: BankSoal
  updatedFields: [String!]
  previousValues: BankSoalPreviousValues
}

input BankSoalSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BankSoalWhereInput
  AND: [BankSoalSubscriptionWhereInput!]
  OR: [BankSoalSubscriptionWhereInput!]
  NOT: [BankSoalSubscriptionWhereInput!]
}

input BankSoalUpdateDataInput {
  prodi: ProdiUpdateOneRequiredInput
  nama: String
  mataKuliah: MataKuliahUpdateOneInput
  dosen: DosenUpdateOneInput
  soals: SoalUpdateManyWithoutBankSoalInput
}

input BankSoalUpdateInput {
  prodi: ProdiUpdateOneRequiredInput
  nama: String
  mataKuliah: MataKuliahUpdateOneInput
  dosen: DosenUpdateOneInput
  soals: SoalUpdateManyWithoutBankSoalInput
}

input BankSoalUpdateOneRequiredInput {
  create: BankSoalCreateInput
  update: BankSoalUpdateDataInput
  upsert: BankSoalUpsertNestedInput
  connect: BankSoalWhereUniqueInput
}

input BankSoalUpdateOneRequiredWithoutSoalsInput {
  create: BankSoalCreateWithoutSoalsInput
  update: BankSoalUpdateWithoutSoalsDataInput
  upsert: BankSoalUpsertWithoutSoalsInput
  connect: BankSoalWhereUniqueInput
}

input BankSoalUpdateWithoutSoalsDataInput {
  prodi: ProdiUpdateOneRequiredInput
  nama: String
  mataKuliah: MataKuliahUpdateOneInput
  dosen: DosenUpdateOneInput
}

input BankSoalUpsertNestedInput {
  update: BankSoalUpdateDataInput!
  create: BankSoalCreateInput!
}

input BankSoalUpsertWithoutSoalsInput {
  update: BankSoalUpdateWithoutSoalsDataInput!
  create: BankSoalCreateWithoutSoalsInput!
}

input BankSoalWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  prodi: ProdiWhereInput
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  mataKuliah: MataKuliahWhereInput
  dosen: DosenWhereInput
  soals_every: SoalWhereInput
  soals_some: SoalWhereInput
  soals_none: SoalWhereInput
  AND: [BankSoalWhereInput!]
  OR: [BankSoalWhereInput!]
  NOT: [BankSoalWhereInput!]
}

input BankSoalWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Dosen {
  id: ID!
  nip: String!
  nama: String!
  user: User!
  prodi: Prodi!
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas!]
  image: String
}

type DosenConnection {
  pageInfo: PageInfo!
  edges: [DosenEdge]!
  aggregate: AggregateDosen!
}

input DosenCreateInput {
  nip: String!
  nama: String!
  user: UserCreateOneWithoutDosenInput!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutDosenInput
  image: String
}

input DosenCreateOneInput {
  create: DosenCreateInput
  connect: DosenWhereUniqueInput
}

input DosenCreateOneWithoutKelasesInput {
  create: DosenCreateWithoutKelasesInput
  connect: DosenWhereUniqueInput
}

input DosenCreateOneWithoutUserInput {
  create: DosenCreateWithoutUserInput
  connect: DosenWhereUniqueInput
}

input DosenCreateWithoutKelasesInput {
  nip: String!
  nama: String!
  user: UserCreateOneWithoutDosenInput!
  prodi: ProdiCreateOneInput!
  image: String
}

input DosenCreateWithoutUserInput {
  nip: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutDosenInput
  image: String
}

type DosenEdge {
  node: Dosen!
  cursor: String!
}

enum DosenOrderByInput {
  id_ASC
  id_DESC
  nip_ASC
  nip_DESC
  nama_ASC
  nama_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DosenPreviousValues {
  id: ID!
  nip: String!
  nama: String!
  image: String
}

type DosenSubscriptionPayload {
  mutation: MutationType!
  node: Dosen
  updatedFields: [String!]
  previousValues: DosenPreviousValues
}

input DosenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DosenWhereInput
  AND: [DosenSubscriptionWhereInput!]
  OR: [DosenSubscriptionWhereInput!]
  NOT: [DosenSubscriptionWhereInput!]
}

input DosenUpdateDataInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutDosenInput
  image: String
}

input DosenUpdateInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutDosenInput
  image: String
}

input DosenUpdateOneInput {
  create: DosenCreateInput
  update: DosenUpdateDataInput
  upsert: DosenUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DosenWhereUniqueInput
}

input DosenUpdateOneWithoutKelasesInput {
  create: DosenCreateWithoutKelasesInput
  update: DosenUpdateWithoutKelasesDataInput
  upsert: DosenUpsertWithoutKelasesInput
  delete: Boolean
  disconnect: Boolean
  connect: DosenWhereUniqueInput
}

input DosenUpdateOneWithoutUserInput {
  create: DosenCreateWithoutUserInput
  update: DosenUpdateWithoutUserDataInput
  upsert: DosenUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: DosenWhereUniqueInput
}

input DosenUpdateWithoutKelasesDataInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
  prodi: ProdiUpdateOneRequiredInput
  image: String
}

input DosenUpdateWithoutUserDataInput {
  nip: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutDosenInput
  image: String
}

input DosenUpsertNestedInput {
  update: DosenUpdateDataInput!
  create: DosenCreateInput!
}

input DosenUpsertWithoutKelasesInput {
  update: DosenUpdateWithoutKelasesDataInput!
  create: DosenCreateWithoutKelasesInput!
}

input DosenUpsertWithoutUserInput {
  update: DosenUpdateWithoutUserDataInput!
  create: DosenCreateWithoutUserInput!
}

input DosenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nip: String
  nip_not: String
  nip_in: [String!]
  nip_not_in: [String!]
  nip_lt: String
  nip_lte: String
  nip_gt: String
  nip_gte: String
  nip_contains: String
  nip_not_contains: String
  nip_starts_with: String
  nip_not_starts_with: String
  nip_ends_with: String
  nip_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  user: UserWhereInput
  prodi: ProdiWhereInput
  kelases_every: KelasWhereInput
  kelases_some: KelasWhereInput
  kelases_none: KelasWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [DosenWhereInput!]
  OR: [DosenWhereInput!]
  NOT: [DosenWhereInput!]
}

input DosenWhereUniqueInput {
  id: ID
  nip: String
}

type Jawaban {
  id: ID!
  image: String
  title: String!
  content: String!
  soal: Soal
}

type JawabanConnection {
  pageInfo: PageInfo!
  edges: [JawabanEdge]!
  aggregate: AggregateJawaban!
}

input JawabanCreateInput {
  image: String
  title: String!
  content: String!
  soal: SoalCreateOneWithoutJawabanInput
}

input JawabanCreateManyWithoutSoalInput {
  create: [JawabanCreateWithoutSoalInput!]
  connect: [JawabanWhereUniqueInput!]
}

input JawabanCreateOneInput {
  create: JawabanCreateInput
  connect: JawabanWhereUniqueInput
}

input JawabanCreateWithoutSoalInput {
  image: String
  title: String!
  content: String!
}

type JawabanEdge {
  node: Jawaban!
  cursor: String!
}

type JawabanMahasiswa {
  id: ID!
  ujian: Ujian!
  idSoal: String!
  jawaban: Jawaban
  pegangan: String
}

type JawabanMahasiswaConnection {
  pageInfo: PageInfo!
  edges: [JawabanMahasiswaEdge]!
  aggregate: AggregateJawabanMahasiswa!
}

input JawabanMahasiswaCreateInput {
  ujian: UjianCreateOneInput!
  idSoal: String!
  jawaban: JawabanCreateOneInput
  pegangan: String
}

input JawabanMahasiswaCreateManyInput {
  create: [JawabanMahasiswaCreateInput!]
  connect: [JawabanMahasiswaWhereUniqueInput!]
}

type JawabanMahasiswaEdge {
  node: JawabanMahasiswa!
  cursor: String!
}

enum JawabanMahasiswaOrderByInput {
  id_ASC
  id_DESC
  idSoal_ASC
  idSoal_DESC
  pegangan_ASC
  pegangan_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JawabanMahasiswaPreviousValues {
  id: ID!
  idSoal: String!
  pegangan: String
}

type JawabanMahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: JawabanMahasiswa
  updatedFields: [String!]
  previousValues: JawabanMahasiswaPreviousValues
}

input JawabanMahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JawabanMahasiswaWhereInput
  AND: [JawabanMahasiswaSubscriptionWhereInput!]
  OR: [JawabanMahasiswaSubscriptionWhereInput!]
  NOT: [JawabanMahasiswaSubscriptionWhereInput!]
}

input JawabanMahasiswaUpdateDataInput {
  ujian: UjianUpdateOneRequiredInput
  idSoal: String
  jawaban: JawabanUpdateOneInput
  pegangan: String
}

input JawabanMahasiswaUpdateInput {
  ujian: UjianUpdateOneRequiredInput
  idSoal: String
  jawaban: JawabanUpdateOneInput
  pegangan: String
}

input JawabanMahasiswaUpdateManyInput {
  create: [JawabanMahasiswaCreateInput!]
  delete: [JawabanMahasiswaWhereUniqueInput!]
  connect: [JawabanMahasiswaWhereUniqueInput!]
  disconnect: [JawabanMahasiswaWhereUniqueInput!]
  update: [JawabanMahasiswaUpdateWithWhereUniqueNestedInput!]
  upsert: [JawabanMahasiswaUpsertWithWhereUniqueNestedInput!]
}

input JawabanMahasiswaUpdateWithWhereUniqueNestedInput {
  where: JawabanMahasiswaWhereUniqueInput!
  data: JawabanMahasiswaUpdateDataInput!
}

input JawabanMahasiswaUpsertWithWhereUniqueNestedInput {
  where: JawabanMahasiswaWhereUniqueInput!
  update: JawabanMahasiswaUpdateDataInput!
  create: JawabanMahasiswaCreateInput!
}

input JawabanMahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ujian: UjianWhereInput
  idSoal: String
  idSoal_not: String
  idSoal_in: [String!]
  idSoal_not_in: [String!]
  idSoal_lt: String
  idSoal_lte: String
  idSoal_gt: String
  idSoal_gte: String
  idSoal_contains: String
  idSoal_not_contains: String
  idSoal_starts_with: String
  idSoal_not_starts_with: String
  idSoal_ends_with: String
  idSoal_not_ends_with: String
  jawaban: JawabanWhereInput
  pegangan: String
  pegangan_not: String
  pegangan_in: [String!]
  pegangan_not_in: [String!]
  pegangan_lt: String
  pegangan_lte: String
  pegangan_gt: String
  pegangan_gte: String
  pegangan_contains: String
  pegangan_not_contains: String
  pegangan_starts_with: String
  pegangan_not_starts_with: String
  pegangan_ends_with: String
  pegangan_not_ends_with: String
  AND: [JawabanMahasiswaWhereInput!]
  OR: [JawabanMahasiswaWhereInput!]
  NOT: [JawabanMahasiswaWhereInput!]
}

input JawabanMahasiswaWhereUniqueInput {
  id: ID
  pegangan: String
}

enum JawabanOrderByInput {
  id_ASC
  id_DESC
  image_ASC
  image_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JawabanPreviousValues {
  id: ID!
  image: String
  title: String!
  content: String!
}

type JawabanSubscriptionPayload {
  mutation: MutationType!
  node: Jawaban
  updatedFields: [String!]
  previousValues: JawabanPreviousValues
}

input JawabanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JawabanWhereInput
  AND: [JawabanSubscriptionWhereInput!]
  OR: [JawabanSubscriptionWhereInput!]
  NOT: [JawabanSubscriptionWhereInput!]
}

input JawabanUpdateDataInput {
  image: String
  title: String
  content: String
  soal: SoalUpdateOneWithoutJawabanInput
}

input JawabanUpdateInput {
  image: String
  title: String
  content: String
  soal: SoalUpdateOneWithoutJawabanInput
}

input JawabanUpdateManyWithoutSoalInput {
  create: [JawabanCreateWithoutSoalInput!]
  delete: [JawabanWhereUniqueInput!]
  connect: [JawabanWhereUniqueInput!]
  disconnect: [JawabanWhereUniqueInput!]
  update: [JawabanUpdateWithWhereUniqueWithoutSoalInput!]
  upsert: [JawabanUpsertWithWhereUniqueWithoutSoalInput!]
}

input JawabanUpdateOneInput {
  create: JawabanCreateInput
  update: JawabanUpdateDataInput
  upsert: JawabanUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: JawabanWhereUniqueInput
}

input JawabanUpdateWithoutSoalDataInput {
  image: String
  title: String
  content: String
}

input JawabanUpdateWithWhereUniqueWithoutSoalInput {
  where: JawabanWhereUniqueInput!
  data: JawabanUpdateWithoutSoalDataInput!
}

input JawabanUpsertNestedInput {
  update: JawabanUpdateDataInput!
  create: JawabanCreateInput!
}

input JawabanUpsertWithWhereUniqueWithoutSoalInput {
  where: JawabanWhereUniqueInput!
  update: JawabanUpdateWithoutSoalDataInput!
  create: JawabanCreateWithoutSoalInput!
}

input JawabanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  soal: SoalWhereInput
  AND: [JawabanWhereInput!]
  OR: [JawabanWhereInput!]
  NOT: [JawabanWhereInput!]
}

input JawabanWhereUniqueInput {
  id: ID
}

type Jurusan {
  id: ID!
  nama: String!
  prodis(where: ProdiWhereInput, orderBy: ProdiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Prodi!]
}

type JurusanConnection {
  pageInfo: PageInfo!
  edges: [JurusanEdge]!
  aggregate: AggregateJurusan!
}

input JurusanCreateInput {
  nama: String!
  prodis: ProdiCreateManyWithoutJurusanInput
}

input JurusanCreateOneWithoutProdisInput {
  create: JurusanCreateWithoutProdisInput
  connect: JurusanWhereUniqueInput
}

input JurusanCreateWithoutProdisInput {
  nama: String!
}

type JurusanEdge {
  node: Jurusan!
  cursor: String!
}

enum JurusanOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JurusanPreviousValues {
  id: ID!
  nama: String!
}

type JurusanSubscriptionPayload {
  mutation: MutationType!
  node: Jurusan
  updatedFields: [String!]
  previousValues: JurusanPreviousValues
}

input JurusanSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JurusanWhereInput
  AND: [JurusanSubscriptionWhereInput!]
  OR: [JurusanSubscriptionWhereInput!]
  NOT: [JurusanSubscriptionWhereInput!]
}

input JurusanUpdateInput {
  nama: String
  prodis: ProdiUpdateManyWithoutJurusanInput
}

input JurusanUpdateOneRequiredWithoutProdisInput {
  create: JurusanCreateWithoutProdisInput
  update: JurusanUpdateWithoutProdisDataInput
  upsert: JurusanUpsertWithoutProdisInput
  connect: JurusanWhereUniqueInput
}

input JurusanUpdateWithoutProdisDataInput {
  nama: String
}

input JurusanUpsertWithoutProdisInput {
  update: JurusanUpdateWithoutProdisDataInput!
  create: JurusanCreateWithoutProdisInput!
}

input JurusanWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  prodis_every: ProdiWhereInput
  prodis_some: ProdiWhereInput
  prodis_none: ProdiWhereInput
  AND: [JurusanWhereInput!]
  OR: [JurusanWhereInput!]
  NOT: [JurusanWhereInput!]
}

input JurusanWhereUniqueInput {
  id: ID
}

type Kelas {
  id: ID!
  prodi: Prodi!
  dosen: Dosen
  mataKuliah: MataKuliah
  nama: String!
  mahasiswas(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mahasiswa!]
}

type KelasConnection {
  pageInfo: PageInfo!
  edges: [KelasEdge]!
  aggregate: AggregateKelas!
}

input KelasCreateInput {
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput
  nama: String!
  mahasiswas: MahasiswaCreateManyWithoutKelasesInput
}

input KelasCreateManyWithoutDosenInput {
  create: [KelasCreateWithoutDosenInput!]
  connect: [KelasWhereUniqueInput!]
}

input KelasCreateManyWithoutMahasiswasInput {
  create: [KelasCreateWithoutMahasiswasInput!]
  connect: [KelasWhereUniqueInput!]
}

input KelasCreateManyWithoutMataKuliahInput {
  create: [KelasCreateWithoutMataKuliahInput!]
  connect: [KelasWhereUniqueInput!]
}

input KelasCreateOneInput {
  create: KelasCreateInput
  connect: KelasWhereUniqueInput
}

input KelasCreateWithoutDosenInput {
  prodi: ProdiCreateOneInput!
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput
  nama: String!
  mahasiswas: MahasiswaCreateManyWithoutKelasesInput
}

input KelasCreateWithoutMahasiswasInput {
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput
  nama: String!
}

input KelasCreateWithoutMataKuliahInput {
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput
  nama: String!
  mahasiswas: MahasiswaCreateManyWithoutKelasesInput
}

type KelasEdge {
  node: Kelas!
  cursor: String!
}

enum KelasOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type KelasPreviousValues {
  id: ID!
  nama: String!
}

type KelasSubscriptionPayload {
  mutation: MutationType!
  node: Kelas
  updatedFields: [String!]
  previousValues: KelasPreviousValues
}

input KelasSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: KelasWhereInput
  AND: [KelasSubscriptionWhereInput!]
  OR: [KelasSubscriptionWhereInput!]
  NOT: [KelasSubscriptionWhereInput!]
}

input KelasUpdateDataInput {
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneWithoutKelasesInput
  mataKuliah: MataKuliahUpdateOneWithoutKelasesInput
  nama: String
  mahasiswas: MahasiswaUpdateManyWithoutKelasesInput
}

input KelasUpdateInput {
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneWithoutKelasesInput
  mataKuliah: MataKuliahUpdateOneWithoutKelasesInput
  nama: String
  mahasiswas: MahasiswaUpdateManyWithoutKelasesInput
}

input KelasUpdateManyWithoutDosenInput {
  create: [KelasCreateWithoutDosenInput!]
  delete: [KelasWhereUniqueInput!]
  connect: [KelasWhereUniqueInput!]
  disconnect: [KelasWhereUniqueInput!]
  update: [KelasUpdateWithWhereUniqueWithoutDosenInput!]
  upsert: [KelasUpsertWithWhereUniqueWithoutDosenInput!]
}

input KelasUpdateManyWithoutMahasiswasInput {
  create: [KelasCreateWithoutMahasiswasInput!]
  delete: [KelasWhereUniqueInput!]
  connect: [KelasWhereUniqueInput!]
  disconnect: [KelasWhereUniqueInput!]
  update: [KelasUpdateWithWhereUniqueWithoutMahasiswasInput!]
  upsert: [KelasUpsertWithWhereUniqueWithoutMahasiswasInput!]
}

input KelasUpdateManyWithoutMataKuliahInput {
  create: [KelasCreateWithoutMataKuliahInput!]
  delete: [KelasWhereUniqueInput!]
  connect: [KelasWhereUniqueInput!]
  disconnect: [KelasWhereUniqueInput!]
  update: [KelasUpdateWithWhereUniqueWithoutMataKuliahInput!]
  upsert: [KelasUpsertWithWhereUniqueWithoutMataKuliahInput!]
}

input KelasUpdateOneRequiredInput {
  create: KelasCreateInput
  update: KelasUpdateDataInput
  upsert: KelasUpsertNestedInput
  connect: KelasWhereUniqueInput
}

input KelasUpdateWithoutDosenDataInput {
  prodi: ProdiUpdateOneRequiredInput
  mataKuliah: MataKuliahUpdateOneWithoutKelasesInput
  nama: String
  mahasiswas: MahasiswaUpdateManyWithoutKelasesInput
}

input KelasUpdateWithoutMahasiswasDataInput {
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneWithoutKelasesInput
  mataKuliah: MataKuliahUpdateOneWithoutKelasesInput
  nama: String
}

input KelasUpdateWithoutMataKuliahDataInput {
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneWithoutKelasesInput
  nama: String
  mahasiswas: MahasiswaUpdateManyWithoutKelasesInput
}

input KelasUpdateWithWhereUniqueWithoutDosenInput {
  where: KelasWhereUniqueInput!
  data: KelasUpdateWithoutDosenDataInput!
}

input KelasUpdateWithWhereUniqueWithoutMahasiswasInput {
  where: KelasWhereUniqueInput!
  data: KelasUpdateWithoutMahasiswasDataInput!
}

input KelasUpdateWithWhereUniqueWithoutMataKuliahInput {
  where: KelasWhereUniqueInput!
  data: KelasUpdateWithoutMataKuliahDataInput!
}

input KelasUpsertNestedInput {
  update: KelasUpdateDataInput!
  create: KelasCreateInput!
}

input KelasUpsertWithWhereUniqueWithoutDosenInput {
  where: KelasWhereUniqueInput!
  update: KelasUpdateWithoutDosenDataInput!
  create: KelasCreateWithoutDosenInput!
}

input KelasUpsertWithWhereUniqueWithoutMahasiswasInput {
  where: KelasWhereUniqueInput!
  update: KelasUpdateWithoutMahasiswasDataInput!
  create: KelasCreateWithoutMahasiswasInput!
}

input KelasUpsertWithWhereUniqueWithoutMataKuliahInput {
  where: KelasWhereUniqueInput!
  update: KelasUpdateWithoutMataKuliahDataInput!
  create: KelasCreateWithoutMataKuliahInput!
}

input KelasWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  prodi: ProdiWhereInput
  dosen: DosenWhereInput
  mataKuliah: MataKuliahWhereInput
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  mahasiswas_every: MahasiswaWhereInput
  mahasiswas_some: MahasiswaWhereInput
  mahasiswas_none: MahasiswaWhereInput
  AND: [KelasWhereInput!]
  OR: [KelasWhereInput!]
  NOT: [KelasWhereInput!]
}

input KelasWhereUniqueInput {
  id: ID
}

scalar Long

type Mahasiswa {
  id: ID!
  nim: String!
  nama: String!
  prodi: Prodi!
  user: User!
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas!]
  soals(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoalMahasiswa!]
  skors(where: SkorWhereInput, orderBy: SkorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skor!]
  image: String
}

type MahasiswaConnection {
  pageInfo: PageInfo!
  edges: [MahasiswaEdge]!
  aggregate: AggregateMahasiswa!
}

input MahasiswaCreateInput {
  nim: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  user: UserCreateOneWithoutMahasiswaInput!
  kelases: KelasCreateManyWithoutMahasiswasInput
  soals: SoalMahasiswaCreateManyWithoutMahasiswaInput
  skors: SkorCreateManyInput
  image: String
}

input MahasiswaCreateManyWithoutKelasesInput {
  create: [MahasiswaCreateWithoutKelasesInput!]
  connect: [MahasiswaWhereUniqueInput!]
}

input MahasiswaCreateOneInput {
  create: MahasiswaCreateInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateOneWithoutSoalsInput {
  create: MahasiswaCreateWithoutSoalsInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateOneWithoutUserInput {
  create: MahasiswaCreateWithoutUserInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateWithoutKelasesInput {
  nim: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  user: UserCreateOneWithoutMahasiswaInput!
  soals: SoalMahasiswaCreateManyWithoutMahasiswaInput
  skors: SkorCreateManyInput
  image: String
}

input MahasiswaCreateWithoutSoalsInput {
  nim: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  user: UserCreateOneWithoutMahasiswaInput!
  kelases: KelasCreateManyWithoutMahasiswasInput
  skors: SkorCreateManyInput
  image: String
}

input MahasiswaCreateWithoutUserInput {
  nim: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutMahasiswasInput
  soals: SoalMahasiswaCreateManyWithoutMahasiswaInput
  skors: SkorCreateManyInput
  image: String
}

type MahasiswaEdge {
  node: Mahasiswa!
  cursor: String!
}

enum MahasiswaOrderByInput {
  id_ASC
  id_DESC
  nim_ASC
  nim_DESC
  nama_ASC
  nama_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MahasiswaPreviousValues {
  id: ID!
  nim: String!
  nama: String!
  image: String
}

type MahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: Mahasiswa
  updatedFields: [String!]
  previousValues: MahasiswaPreviousValues
}

input MahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MahasiswaWhereInput
  AND: [MahasiswaSubscriptionWhereInput!]
  OR: [MahasiswaSubscriptionWhereInput!]
  NOT: [MahasiswaSubscriptionWhereInput!]
}

input MahasiswaUpdateDataInput {
  nim: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  soals: SoalMahasiswaUpdateManyWithoutMahasiswaInput
  skors: SkorUpdateManyInput
  image: String
}

input MahasiswaUpdateInput {
  nim: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  soals: SoalMahasiswaUpdateManyWithoutMahasiswaInput
  skors: SkorUpdateManyInput
  image: String
}

input MahasiswaUpdateManyWithoutKelasesInput {
  create: [MahasiswaCreateWithoutKelasesInput!]
  delete: [MahasiswaWhereUniqueInput!]
  connect: [MahasiswaWhereUniqueInput!]
  disconnect: [MahasiswaWhereUniqueInput!]
  update: [MahasiswaUpdateWithWhereUniqueWithoutKelasesInput!]
  upsert: [MahasiswaUpsertWithWhereUniqueWithoutKelasesInput!]
}

input MahasiswaUpdateOneRequiredInput {
  create: MahasiswaCreateInput
  update: MahasiswaUpdateDataInput
  upsert: MahasiswaUpsertNestedInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaUpdateOneRequiredWithoutSoalsInput {
  create: MahasiswaCreateWithoutSoalsInput
  update: MahasiswaUpdateWithoutSoalsDataInput
  upsert: MahasiswaUpsertWithoutSoalsInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaUpdateOneWithoutUserInput {
  create: MahasiswaCreateWithoutUserInput
  update: MahasiswaUpdateWithoutUserDataInput
  upsert: MahasiswaUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaUpdateWithoutKelasesDataInput {
  nim: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  soals: SoalMahasiswaUpdateManyWithoutMahasiswaInput
  skors: SkorUpdateManyInput
  image: String
}

input MahasiswaUpdateWithoutSoalsDataInput {
  nim: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  skors: SkorUpdateManyInput
  image: String
}

input MahasiswaUpdateWithoutUserDataInput {
  nim: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  soals: SoalMahasiswaUpdateManyWithoutMahasiswaInput
  skors: SkorUpdateManyInput
  image: String
}

input MahasiswaUpdateWithWhereUniqueWithoutKelasesInput {
  where: MahasiswaWhereUniqueInput!
  data: MahasiswaUpdateWithoutKelasesDataInput!
}

input MahasiswaUpsertNestedInput {
  update: MahasiswaUpdateDataInput!
  create: MahasiswaCreateInput!
}

input MahasiswaUpsertWithoutSoalsInput {
  update: MahasiswaUpdateWithoutSoalsDataInput!
  create: MahasiswaCreateWithoutSoalsInput!
}

input MahasiswaUpsertWithoutUserInput {
  update: MahasiswaUpdateWithoutUserDataInput!
  create: MahasiswaCreateWithoutUserInput!
}

input MahasiswaUpsertWithWhereUniqueWithoutKelasesInput {
  where: MahasiswaWhereUniqueInput!
  update: MahasiswaUpdateWithoutKelasesDataInput!
  create: MahasiswaCreateWithoutKelasesInput!
}

input MahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  nim: String
  nim_not: String
  nim_in: [String!]
  nim_not_in: [String!]
  nim_lt: String
  nim_lte: String
  nim_gt: String
  nim_gte: String
  nim_contains: String
  nim_not_contains: String
  nim_starts_with: String
  nim_not_starts_with: String
  nim_ends_with: String
  nim_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  prodi: ProdiWhereInput
  user: UserWhereInput
  kelases_every: KelasWhereInput
  kelases_some: KelasWhereInput
  kelases_none: KelasWhereInput
  soals_every: SoalMahasiswaWhereInput
  soals_some: SoalMahasiswaWhereInput
  soals_none: SoalMahasiswaWhereInput
  skors_every: SkorWhereInput
  skors_some: SkorWhereInput
  skors_none: SkorWhereInput
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [MahasiswaWhereInput!]
  OR: [MahasiswaWhereInput!]
  NOT: [MahasiswaWhereInput!]
}

input MahasiswaWhereUniqueInput {
  id: ID
  nim: String
}

type MataKuliah {
  id: ID!
  kode: String!
  nama: String!
  prodi: Prodi!
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas!]
}

type MataKuliahConnection {
  pageInfo: PageInfo!
  edges: [MataKuliahEdge]!
  aggregate: AggregateMataKuliah!
}

input MataKuliahCreateInput {
  kode: String!
  nama: String!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutMataKuliahInput
}

input MataKuliahCreateOneInput {
  create: MataKuliahCreateInput
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahCreateOneWithoutKelasesInput {
  create: MataKuliahCreateWithoutKelasesInput
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahCreateWithoutKelasesInput {
  kode: String!
  nama: String!
  prodi: ProdiCreateOneInput!
}

type MataKuliahEdge {
  node: MataKuliah!
  cursor: String!
}

enum MataKuliahOrderByInput {
  id_ASC
  id_DESC
  kode_ASC
  kode_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MataKuliahPreviousValues {
  id: ID!
  kode: String!
  nama: String!
}

type MataKuliahSubscriptionPayload {
  mutation: MutationType!
  node: MataKuliah
  updatedFields: [String!]
  previousValues: MataKuliahPreviousValues
}

input MataKuliahSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MataKuliahWhereInput
  AND: [MataKuliahSubscriptionWhereInput!]
  OR: [MataKuliahSubscriptionWhereInput!]
  NOT: [MataKuliahSubscriptionWhereInput!]
}

input MataKuliahUpdateDataInput {
  kode: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutMataKuliahInput
}

input MataKuliahUpdateInput {
  kode: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutMataKuliahInput
}

input MataKuliahUpdateOneInput {
  create: MataKuliahCreateInput
  update: MataKuliahUpdateDataInput
  upsert: MataKuliahUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahUpdateOneWithoutKelasesInput {
  create: MataKuliahCreateWithoutKelasesInput
  update: MataKuliahUpdateWithoutKelasesDataInput
  upsert: MataKuliahUpsertWithoutKelasesInput
  delete: Boolean
  disconnect: Boolean
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahUpdateWithoutKelasesDataInput {
  kode: String
  nama: String
  prodi: ProdiUpdateOneRequiredInput
}

input MataKuliahUpsertNestedInput {
  update: MataKuliahUpdateDataInput!
  create: MataKuliahCreateInput!
}

input MataKuliahUpsertWithoutKelasesInput {
  update: MataKuliahUpdateWithoutKelasesDataInput!
  create: MataKuliahCreateWithoutKelasesInput!
}

input MataKuliahWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  kode: String
  kode_not: String
  kode_in: [String!]
  kode_not_in: [String!]
  kode_lt: String
  kode_lte: String
  kode_gt: String
  kode_gte: String
  kode_contains: String
  kode_not_contains: String
  kode_starts_with: String
  kode_not_starts_with: String
  kode_ends_with: String
  kode_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  prodi: ProdiWhereInput
  kelases_every: KelasWhereInput
  kelases_some: KelasWhereInput
  kelases_none: KelasWhereInput
  AND: [MataKuliahWhereInput!]
  OR: [MataKuliahWhereInput!]
  NOT: [MataKuliahWhereInput!]
}

input MataKuliahWhereUniqueInput {
  id: ID
  kode: String
}

type Mutation {
  createAdmin(data: AdminCreateInput!): Admin!
  updateAdmin(data: AdminUpdateInput!, where: AdminWhereUniqueInput!): Admin
  updateManyAdmins(data: AdminUpdateInput!, where: AdminWhereInput): BatchPayload!
  upsertAdmin(where: AdminWhereUniqueInput!, create: AdminCreateInput!, update: AdminUpdateInput!): Admin!
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  createAngkatan(data: AngkatanCreateInput!): Angkatan!
  updateAngkatan(data: AngkatanUpdateInput!, where: AngkatanWhereUniqueInput!): Angkatan
  updateManyAngkatans(data: AngkatanUpdateInput!, where: AngkatanWhereInput): BatchPayload!
  upsertAngkatan(where: AngkatanWhereUniqueInput!, create: AngkatanCreateInput!, update: AngkatanUpdateInput!): Angkatan!
  deleteAngkatan(where: AngkatanWhereUniqueInput!): Angkatan
  deleteManyAngkatans(where: AngkatanWhereInput): BatchPayload!
  createBankSoal(data: BankSoalCreateInput!): BankSoal!
  updateBankSoal(data: BankSoalUpdateInput!, where: BankSoalWhereUniqueInput!): BankSoal
  updateManyBankSoals(data: BankSoalUpdateInput!, where: BankSoalWhereInput): BatchPayload!
  upsertBankSoal(where: BankSoalWhereUniqueInput!, create: BankSoalCreateInput!, update: BankSoalUpdateInput!): BankSoal!
  deleteBankSoal(where: BankSoalWhereUniqueInput!): BankSoal
  deleteManyBankSoals(where: BankSoalWhereInput): BatchPayload!
  createDosen(data: DosenCreateInput!): Dosen!
  updateDosen(data: DosenUpdateInput!, where: DosenWhereUniqueInput!): Dosen
  updateManyDosens(data: DosenUpdateInput!, where: DosenWhereInput): BatchPayload!
  upsertDosen(where: DosenWhereUniqueInput!, create: DosenCreateInput!, update: DosenUpdateInput!): Dosen!
  deleteDosen(where: DosenWhereUniqueInput!): Dosen
  deleteManyDosens(where: DosenWhereInput): BatchPayload!
  createJawaban(data: JawabanCreateInput!): Jawaban!
  updateJawaban(data: JawabanUpdateInput!, where: JawabanWhereUniqueInput!): Jawaban
  updateManyJawabans(data: JawabanUpdateInput!, where: JawabanWhereInput): BatchPayload!
  upsertJawaban(where: JawabanWhereUniqueInput!, create: JawabanCreateInput!, update: JawabanUpdateInput!): Jawaban!
  deleteJawaban(where: JawabanWhereUniqueInput!): Jawaban
  deleteManyJawabans(where: JawabanWhereInput): BatchPayload!
  createJawabanMahasiswa(data: JawabanMahasiswaCreateInput!): JawabanMahasiswa!
  updateJawabanMahasiswa(data: JawabanMahasiswaUpdateInput!, where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  updateManyJawabanMahasiswas(data: JawabanMahasiswaUpdateInput!, where: JawabanMahasiswaWhereInput): BatchPayload!
  upsertJawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!, create: JawabanMahasiswaCreateInput!, update: JawabanMahasiswaUpdateInput!): JawabanMahasiswa!
  deleteJawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  deleteManyJawabanMahasiswas(where: JawabanMahasiswaWhereInput): BatchPayload!
  createJurusan(data: JurusanCreateInput!): Jurusan!
  updateJurusan(data: JurusanUpdateInput!, where: JurusanWhereUniqueInput!): Jurusan
  updateManyJurusans(data: JurusanUpdateInput!, where: JurusanWhereInput): BatchPayload!
  upsertJurusan(where: JurusanWhereUniqueInput!, create: JurusanCreateInput!, update: JurusanUpdateInput!): Jurusan!
  deleteJurusan(where: JurusanWhereUniqueInput!): Jurusan
  deleteManyJurusans(where: JurusanWhereInput): BatchPayload!
  createKelas(data: KelasCreateInput!): Kelas!
  updateKelas(data: KelasUpdateInput!, where: KelasWhereUniqueInput!): Kelas
  updateManyKelases(data: KelasUpdateInput!, where: KelasWhereInput): BatchPayload!
  upsertKelas(where: KelasWhereUniqueInput!, create: KelasCreateInput!, update: KelasUpdateInput!): Kelas!
  deleteKelas(where: KelasWhereUniqueInput!): Kelas
  deleteManyKelases(where: KelasWhereInput): BatchPayload!
  createMahasiswa(data: MahasiswaCreateInput!): Mahasiswa!
  updateMahasiswa(data: MahasiswaUpdateInput!, where: MahasiswaWhereUniqueInput!): Mahasiswa
  updateManyMahasiswas(data: MahasiswaUpdateInput!, where: MahasiswaWhereInput): BatchPayload!
  upsertMahasiswa(where: MahasiswaWhereUniqueInput!, create: MahasiswaCreateInput!, update: MahasiswaUpdateInput!): Mahasiswa!
  deleteMahasiswa(where: MahasiswaWhereUniqueInput!): Mahasiswa
  deleteManyMahasiswas(where: MahasiswaWhereInput): BatchPayload!
  createMataKuliah(data: MataKuliahCreateInput!): MataKuliah!
  updateMataKuliah(data: MataKuliahUpdateInput!, where: MataKuliahWhereUniqueInput!): MataKuliah
  updateManyMataKuliahs(data: MataKuliahUpdateInput!, where: MataKuliahWhereInput): BatchPayload!
  upsertMataKuliah(where: MataKuliahWhereUniqueInput!, create: MataKuliahCreateInput!, update: MataKuliahUpdateInput!): MataKuliah!
  deleteMataKuliah(where: MataKuliahWhereUniqueInput!): MataKuliah
  deleteManyMataKuliahs(where: MataKuliahWhereInput): BatchPayload!
  createProdi(data: ProdiCreateInput!): Prodi!
  updateProdi(data: ProdiUpdateInput!, where: ProdiWhereUniqueInput!): Prodi
  updateManyProdis(data: ProdiUpdateInput!, where: ProdiWhereInput): BatchPayload!
  upsertProdi(where: ProdiWhereUniqueInput!, create: ProdiCreateInput!, update: ProdiUpdateInput!): Prodi!
  deleteProdi(where: ProdiWhereUniqueInput!): Prodi
  deleteManyProdis(where: ProdiWhereInput): BatchPayload!
  createSkor(data: SkorCreateInput!): Skor!
  updateSkor(data: SkorUpdateInput!, where: SkorWhereUniqueInput!): Skor
  updateManySkors(data: SkorUpdateInput!, where: SkorWhereInput): BatchPayload!
  upsertSkor(where: SkorWhereUniqueInput!, create: SkorCreateInput!, update: SkorUpdateInput!): Skor!
  deleteSkor(where: SkorWhereUniqueInput!): Skor
  deleteManySkors(where: SkorWhereInput): BatchPayload!
  createSoal(data: SoalCreateInput!): Soal!
  updateSoal(data: SoalUpdateInput!, where: SoalWhereUniqueInput!): Soal
  updateManySoals(data: SoalUpdateInput!, where: SoalWhereInput): BatchPayload!
  upsertSoal(where: SoalWhereUniqueInput!, create: SoalCreateInput!, update: SoalUpdateInput!): Soal!
  deleteSoal(where: SoalWhereUniqueInput!): Soal
  deleteManySoals(where: SoalWhereInput): BatchPayload!
  createSoalMahasiswa(data: SoalMahasiswaCreateInput!): SoalMahasiswa!
  updateSoalMahasiswa(data: SoalMahasiswaUpdateInput!, where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  updateManySoalMahasiswas(data: SoalMahasiswaUpdateInput!, where: SoalMahasiswaWhereInput): BatchPayload!
  upsertSoalMahasiswa(where: SoalMahasiswaWhereUniqueInput!, create: SoalMahasiswaCreateInput!, update: SoalMahasiswaUpdateInput!): SoalMahasiswa!
  deleteSoalMahasiswa(where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  deleteManySoalMahasiswas(where: SoalMahasiswaWhereInput): BatchPayload!
  createTidakHadir(data: TidakHadirCreateInput!): TidakHadir!
  updateTidakHadir(data: TidakHadirUpdateInput!, where: TidakHadirWhereUniqueInput!): TidakHadir
  updateManyTidakHadirs(data: TidakHadirUpdateInput!, where: TidakHadirWhereInput): BatchPayload!
  upsertTidakHadir(where: TidakHadirWhereUniqueInput!, create: TidakHadirCreateInput!, update: TidakHadirUpdateInput!): TidakHadir!
  deleteTidakHadir(where: TidakHadirWhereUniqueInput!): TidakHadir
  deleteManyTidakHadirs(where: TidakHadirWhereInput): BatchPayload!
  createUjian(data: UjianCreateInput!): Ujian!
  updateUjian(data: UjianUpdateInput!, where: UjianWhereUniqueInput!): Ujian
  updateManyUjians(data: UjianUpdateInput!, where: UjianWhereInput): BatchPayload!
  upsertUjian(where: UjianWhereUniqueInput!, create: UjianCreateInput!, update: UjianUpdateInput!): Ujian!
  deleteUjian(where: UjianWhereUniqueInput!): Ujian
  deleteManyUjians(where: UjianWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  USER
  ADMIN
  DOSEN
  MAHASISWA
  PENGAWAS
}

type Prodi {
  id: ID!
  jurusan: Jurusan!
  nama: String!
}

type ProdiConnection {
  pageInfo: PageInfo!
  edges: [ProdiEdge]!
  aggregate: AggregateProdi!
}

input ProdiCreateInput {
  jurusan: JurusanCreateOneWithoutProdisInput!
  nama: String!
}

input ProdiCreateManyWithoutJurusanInput {
  create: [ProdiCreateWithoutJurusanInput!]
  connect: [ProdiWhereUniqueInput!]
}

input ProdiCreateOneInput {
  create: ProdiCreateInput
  connect: ProdiWhereUniqueInput
}

input ProdiCreateWithoutJurusanInput {
  nama: String!
}

type ProdiEdge {
  node: Prodi!
  cursor: String!
}

enum ProdiOrderByInput {
  id_ASC
  id_DESC
  nama_ASC
  nama_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProdiPreviousValues {
  id: ID!
  nama: String!
}

type ProdiSubscriptionPayload {
  mutation: MutationType!
  node: Prodi
  updatedFields: [String!]
  previousValues: ProdiPreviousValues
}

input ProdiSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProdiWhereInput
  AND: [ProdiSubscriptionWhereInput!]
  OR: [ProdiSubscriptionWhereInput!]
  NOT: [ProdiSubscriptionWhereInput!]
}

input ProdiUpdateDataInput {
  jurusan: JurusanUpdateOneRequiredWithoutProdisInput
  nama: String
}

input ProdiUpdateInput {
  jurusan: JurusanUpdateOneRequiredWithoutProdisInput
  nama: String
}

input ProdiUpdateManyWithoutJurusanInput {
  create: [ProdiCreateWithoutJurusanInput!]
  delete: [ProdiWhereUniqueInput!]
  connect: [ProdiWhereUniqueInput!]
  disconnect: [ProdiWhereUniqueInput!]
  update: [ProdiUpdateWithWhereUniqueWithoutJurusanInput!]
  upsert: [ProdiUpsertWithWhereUniqueWithoutJurusanInput!]
}

input ProdiUpdateOneRequiredInput {
  create: ProdiCreateInput
  update: ProdiUpdateDataInput
  upsert: ProdiUpsertNestedInput
  connect: ProdiWhereUniqueInput
}

input ProdiUpdateWithoutJurusanDataInput {
  nama: String
}

input ProdiUpdateWithWhereUniqueWithoutJurusanInput {
  where: ProdiWhereUniqueInput!
  data: ProdiUpdateWithoutJurusanDataInput!
}

input ProdiUpsertNestedInput {
  update: ProdiUpdateDataInput!
  create: ProdiCreateInput!
}

input ProdiUpsertWithWhereUniqueWithoutJurusanInput {
  where: ProdiWhereUniqueInput!
  update: ProdiUpdateWithoutJurusanDataInput!
  create: ProdiCreateWithoutJurusanInput!
}

input ProdiWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  jurusan: JurusanWhereInput
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  AND: [ProdiWhereInput!]
  OR: [ProdiWhereInput!]
  NOT: [ProdiWhereInput!]
}

input ProdiWhereUniqueInput {
  id: ID
  nama: String
}

type Query {
  admin(where: AdminWhereUniqueInput!): Admin
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  angkatan(where: AngkatanWhereUniqueInput!): Angkatan
  angkatans(where: AngkatanWhereInput, orderBy: AngkatanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Angkatan]!
  angkatansConnection(where: AngkatanWhereInput, orderBy: AngkatanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AngkatanConnection!
  bankSoal(where: BankSoalWhereUniqueInput!): BankSoal
  bankSoals(where: BankSoalWhereInput, orderBy: BankSoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BankSoal]!
  bankSoalsConnection(where: BankSoalWhereInput, orderBy: BankSoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BankSoalConnection!
  dosen(where: DosenWhereUniqueInput!): Dosen
  dosens(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dosen]!
  dosensConnection(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DosenConnection!
  jawaban(where: JawabanWhereUniqueInput!): Jawaban
  jawabans(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jawaban]!
  jawabansConnection(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JawabanConnection!
  jawabanMahasiswa(where: JawabanMahasiswaWhereUniqueInput!): JawabanMahasiswa
  jawabanMahasiswas(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JawabanMahasiswa]!
  jawabanMahasiswasConnection(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JawabanMahasiswaConnection!
  jurusan(where: JurusanWhereUniqueInput!): Jurusan
  jurusans(where: JurusanWhereInput, orderBy: JurusanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jurusan]!
  jurusansConnection(where: JurusanWhereInput, orderBy: JurusanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JurusanConnection!
  kelas(where: KelasWhereUniqueInput!): Kelas
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas]!
  kelasesConnection(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): KelasConnection!
  mahasiswa(where: MahasiswaWhereUniqueInput!): Mahasiswa
  mahasiswas(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mahasiswa]!
  mahasiswasConnection(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MahasiswaConnection!
  mataKuliah(where: MataKuliahWhereUniqueInput!): MataKuliah
  mataKuliahs(where: MataKuliahWhereInput, orderBy: MataKuliahOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MataKuliah]!
  mataKuliahsConnection(where: MataKuliahWhereInput, orderBy: MataKuliahOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MataKuliahConnection!
  prodi(where: ProdiWhereUniqueInput!): Prodi
  prodis(where: ProdiWhereInput, orderBy: ProdiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Prodi]!
  prodisConnection(where: ProdiWhereInput, orderBy: ProdiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProdiConnection!
  skor(where: SkorWhereUniqueInput!): Skor
  skors(where: SkorWhereInput, orderBy: SkorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skor]!
  skorsConnection(where: SkorWhereInput, orderBy: SkorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkorConnection!
  soal(where: SoalWhereUniqueInput!): Soal
  soals(where: SoalWhereInput, orderBy: SoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Soal]!
  soalsConnection(where: SoalWhereInput, orderBy: SoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SoalConnection!
  soalMahasiswa(where: SoalMahasiswaWhereUniqueInput!): SoalMahasiswa
  soalMahasiswas(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoalMahasiswa]!
  soalMahasiswasConnection(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SoalMahasiswaConnection!
  tidakHadir(where: TidakHadirWhereUniqueInput!): TidakHadir
  tidakHadirs(where: TidakHadirWhereInput, orderBy: TidakHadirOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TidakHadir]!
  tidakHadirsConnection(where: TidakHadirWhereInput, orderBy: TidakHadirOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TidakHadirConnection!
  ujian(where: UjianWhereUniqueInput!): Ujian
  ujians(where: UjianWhereInput, orderBy: UjianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ujian]!
  ujiansConnection(where: UjianWhereInput, orderBy: UjianOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UjianConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Skor {
  id: ID!
  idSoal: String!
  soalMahasiswa: SoalMahasiswa!
  nilai: Float!
}

type SkorConnection {
  pageInfo: PageInfo!
  edges: [SkorEdge]!
  aggregate: AggregateSkor!
}

input SkorCreateInput {
  idSoal: String!
  soalMahasiswa: SoalMahasiswaCreateOneWithoutSkorInput!
  nilai: Float
}

input SkorCreateManyInput {
  create: [SkorCreateInput!]
  connect: [SkorWhereUniqueInput!]
}

input SkorCreateOneWithoutSoalMahasiswaInput {
  create: SkorCreateWithoutSoalMahasiswaInput
  connect: SkorWhereUniqueInput
}

input SkorCreateWithoutSoalMahasiswaInput {
  idSoal: String!
  nilai: Float
}

type SkorEdge {
  node: Skor!
  cursor: String!
}

enum SkorOrderByInput {
  id_ASC
  id_DESC
  idSoal_ASC
  idSoal_DESC
  nilai_ASC
  nilai_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SkorPreviousValues {
  id: ID!
  idSoal: String!
  nilai: Float!
}

type SkorSubscriptionPayload {
  mutation: MutationType!
  node: Skor
  updatedFields: [String!]
  previousValues: SkorPreviousValues
}

input SkorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkorWhereInput
  AND: [SkorSubscriptionWhereInput!]
  OR: [SkorSubscriptionWhereInput!]
  NOT: [SkorSubscriptionWhereInput!]
}

input SkorUpdateDataInput {
  idSoal: String
  soalMahasiswa: SoalMahasiswaUpdateOneRequiredWithoutSkorInput
  nilai: Float
}

input SkorUpdateInput {
  idSoal: String
  soalMahasiswa: SoalMahasiswaUpdateOneRequiredWithoutSkorInput
  nilai: Float
}

input SkorUpdateManyInput {
  create: [SkorCreateInput!]
  delete: [SkorWhereUniqueInput!]
  connect: [SkorWhereUniqueInput!]
  disconnect: [SkorWhereUniqueInput!]
  update: [SkorUpdateWithWhereUniqueNestedInput!]
  upsert: [SkorUpsertWithWhereUniqueNestedInput!]
}

input SkorUpdateOneWithoutSoalMahasiswaInput {
  create: SkorCreateWithoutSoalMahasiswaInput
  update: SkorUpdateWithoutSoalMahasiswaDataInput
  upsert: SkorUpsertWithoutSoalMahasiswaInput
  delete: Boolean
  disconnect: Boolean
  connect: SkorWhereUniqueInput
}

input SkorUpdateWithoutSoalMahasiswaDataInput {
  idSoal: String
  nilai: Float
}

input SkorUpdateWithWhereUniqueNestedInput {
  where: SkorWhereUniqueInput!
  data: SkorUpdateDataInput!
}

input SkorUpsertWithoutSoalMahasiswaInput {
  update: SkorUpdateWithoutSoalMahasiswaDataInput!
  create: SkorCreateWithoutSoalMahasiswaInput!
}

input SkorUpsertWithWhereUniqueNestedInput {
  where: SkorWhereUniqueInput!
  update: SkorUpdateDataInput!
  create: SkorCreateInput!
}

input SkorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  idSoal: String
  idSoal_not: String
  idSoal_in: [String!]
  idSoal_not_in: [String!]
  idSoal_lt: String
  idSoal_lte: String
  idSoal_gt: String
  idSoal_gte: String
  idSoal_contains: String
  idSoal_not_contains: String
  idSoal_starts_with: String
  idSoal_not_starts_with: String
  idSoal_ends_with: String
  idSoal_not_ends_with: String
  soalMahasiswa: SoalMahasiswaWhereInput
  nilai: Float
  nilai_not: Float
  nilai_in: [Float!]
  nilai_not_in: [Float!]
  nilai_lt: Float
  nilai_lte: Float
  nilai_gt: Float
  nilai_gte: Float
  AND: [SkorWhereInput!]
  OR: [SkorWhereInput!]
  NOT: [SkorWhereInput!]
}

input SkorWhereUniqueInput {
  id: ID
  idSoal: String
}

type Soal {
  id: ID!
  pertanyaan: String!
  image: String
  jawaban(where: JawabanWhereInput, orderBy: JawabanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Jawaban!]
  bankSoal: BankSoal!
  tingkatKesulitan: String!
  kunciJawaban: String!
}

type SoalConnection {
  pageInfo: PageInfo!
  edges: [SoalEdge]!
  aggregate: AggregateSoal!
}

input SoalCreateInput {
  pertanyaan: String!
  image: String
  jawaban: JawabanCreateManyWithoutSoalInput
  bankSoal: BankSoalCreateOneWithoutSoalsInput!
  tingkatKesulitan: String!
  kunciJawaban: String!
}

input SoalCreateManyInput {
  create: [SoalCreateInput!]
  connect: [SoalWhereUniqueInput!]
}

input SoalCreateManyWithoutBankSoalInput {
  create: [SoalCreateWithoutBankSoalInput!]
  connect: [SoalWhereUniqueInput!]
}

input SoalCreateOneWithoutJawabanInput {
  create: SoalCreateWithoutJawabanInput
  connect: SoalWhereUniqueInput
}

input SoalCreateWithoutBankSoalInput {
  pertanyaan: String!
  image: String
  jawaban: JawabanCreateManyWithoutSoalInput
  tingkatKesulitan: String!
  kunciJawaban: String!
}

input SoalCreateWithoutJawabanInput {
  pertanyaan: String!
  image: String
  bankSoal: BankSoalCreateOneWithoutSoalsInput!
  tingkatKesulitan: String!
  kunciJawaban: String!
}

type SoalEdge {
  node: Soal!
  cursor: String!
}

type SoalMahasiswa {
  id: ID!
  ujian: Ujian!
  mahasiswa: Mahasiswa!
  soals(where: SoalWhereInput, orderBy: SoalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Soal!]
  jawaban(where: JawabanMahasiswaWhereInput, orderBy: JawabanMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JawabanMahasiswa!]
  ujianSelesai: Boolean!
  skor: Skor
}

type SoalMahasiswaConnection {
  pageInfo: PageInfo!
  edges: [SoalMahasiswaEdge]!
  aggregate: AggregateSoalMahasiswa!
}

input SoalMahasiswaCreateInput {
  ujian: UjianCreateOneWithoutSoalMahasiswasInput!
  mahasiswa: MahasiswaCreateOneWithoutSoalsInput!
  soals: SoalCreateManyInput
  jawaban: JawabanMahasiswaCreateManyInput
  ujianSelesai: Boolean
  skor: SkorCreateOneWithoutSoalMahasiswaInput
}

input SoalMahasiswaCreateManyWithoutMahasiswaInput {
  create: [SoalMahasiswaCreateWithoutMahasiswaInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
}

input SoalMahasiswaCreateManyWithoutUjianInput {
  create: [SoalMahasiswaCreateWithoutUjianInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
}

input SoalMahasiswaCreateOneWithoutSkorInput {
  create: SoalMahasiswaCreateWithoutSkorInput
  connect: SoalMahasiswaWhereUniqueInput
}

input SoalMahasiswaCreateWithoutMahasiswaInput {
  ujian: UjianCreateOneWithoutSoalMahasiswasInput!
  soals: SoalCreateManyInput
  jawaban: JawabanMahasiswaCreateManyInput
  ujianSelesai: Boolean
  skor: SkorCreateOneWithoutSoalMahasiswaInput
}

input SoalMahasiswaCreateWithoutSkorInput {
  ujian: UjianCreateOneWithoutSoalMahasiswasInput!
  mahasiswa: MahasiswaCreateOneWithoutSoalsInput!
  soals: SoalCreateManyInput
  jawaban: JawabanMahasiswaCreateManyInput
  ujianSelesai: Boolean
}

input SoalMahasiswaCreateWithoutUjianInput {
  mahasiswa: MahasiswaCreateOneWithoutSoalsInput!
  soals: SoalCreateManyInput
  jawaban: JawabanMahasiswaCreateManyInput
  ujianSelesai: Boolean
  skor: SkorCreateOneWithoutSoalMahasiswaInput
}

type SoalMahasiswaEdge {
  node: SoalMahasiswa!
  cursor: String!
}

enum SoalMahasiswaOrderByInput {
  id_ASC
  id_DESC
  ujianSelesai_ASC
  ujianSelesai_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SoalMahasiswaPreviousValues {
  id: ID!
  ujianSelesai: Boolean!
}

type SoalMahasiswaSubscriptionPayload {
  mutation: MutationType!
  node: SoalMahasiswa
  updatedFields: [String!]
  previousValues: SoalMahasiswaPreviousValues
}

input SoalMahasiswaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SoalMahasiswaWhereInput
  AND: [SoalMahasiswaSubscriptionWhereInput!]
  OR: [SoalMahasiswaSubscriptionWhereInput!]
  NOT: [SoalMahasiswaSubscriptionWhereInput!]
}

input SoalMahasiswaUpdateInput {
  ujian: UjianUpdateOneRequiredWithoutSoalMahasiswasInput
  mahasiswa: MahasiswaUpdateOneRequiredWithoutSoalsInput
  soals: SoalUpdateManyInput
  jawaban: JawabanMahasiswaUpdateManyInput
  ujianSelesai: Boolean
  skor: SkorUpdateOneWithoutSoalMahasiswaInput
}

input SoalMahasiswaUpdateManyWithoutMahasiswaInput {
  create: [SoalMahasiswaCreateWithoutMahasiswaInput!]
  delete: [SoalMahasiswaWhereUniqueInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
  disconnect: [SoalMahasiswaWhereUniqueInput!]
  update: [SoalMahasiswaUpdateWithWhereUniqueWithoutMahasiswaInput!]
  upsert: [SoalMahasiswaUpsertWithWhereUniqueWithoutMahasiswaInput!]
}

input SoalMahasiswaUpdateManyWithoutUjianInput {
  create: [SoalMahasiswaCreateWithoutUjianInput!]
  delete: [SoalMahasiswaWhereUniqueInput!]
  connect: [SoalMahasiswaWhereUniqueInput!]
  disconnect: [SoalMahasiswaWhereUniqueInput!]
  update: [SoalMahasiswaUpdateWithWhereUniqueWithoutUjianInput!]
  upsert: [SoalMahasiswaUpsertWithWhereUniqueWithoutUjianInput!]
}

input SoalMahasiswaUpdateOneRequiredWithoutSkorInput {
  create: SoalMahasiswaCreateWithoutSkorInput
  update: SoalMahasiswaUpdateWithoutSkorDataInput
  upsert: SoalMahasiswaUpsertWithoutSkorInput
  connect: SoalMahasiswaWhereUniqueInput
}

input SoalMahasiswaUpdateWithoutMahasiswaDataInput {
  ujian: UjianUpdateOneRequiredWithoutSoalMahasiswasInput
  soals: SoalUpdateManyInput
  jawaban: JawabanMahasiswaUpdateManyInput
  ujianSelesai: Boolean
  skor: SkorUpdateOneWithoutSoalMahasiswaInput
}

input SoalMahasiswaUpdateWithoutSkorDataInput {
  ujian: UjianUpdateOneRequiredWithoutSoalMahasiswasInput
  mahasiswa: MahasiswaUpdateOneRequiredWithoutSoalsInput
  soals: SoalUpdateManyInput
  jawaban: JawabanMahasiswaUpdateManyInput
  ujianSelesai: Boolean
}

input SoalMahasiswaUpdateWithoutUjianDataInput {
  mahasiswa: MahasiswaUpdateOneRequiredWithoutSoalsInput
  soals: SoalUpdateManyInput
  jawaban: JawabanMahasiswaUpdateManyInput
  ujianSelesai: Boolean
  skor: SkorUpdateOneWithoutSoalMahasiswaInput
}

input SoalMahasiswaUpdateWithWhereUniqueWithoutMahasiswaInput {
  where: SoalMahasiswaWhereUniqueInput!
  data: SoalMahasiswaUpdateWithoutMahasiswaDataInput!
}

input SoalMahasiswaUpdateWithWhereUniqueWithoutUjianInput {
  where: SoalMahasiswaWhereUniqueInput!
  data: SoalMahasiswaUpdateWithoutUjianDataInput!
}

input SoalMahasiswaUpsertWithoutSkorInput {
  update: SoalMahasiswaUpdateWithoutSkorDataInput!
  create: SoalMahasiswaCreateWithoutSkorInput!
}

input SoalMahasiswaUpsertWithWhereUniqueWithoutMahasiswaInput {
  where: SoalMahasiswaWhereUniqueInput!
  update: SoalMahasiswaUpdateWithoutMahasiswaDataInput!
  create: SoalMahasiswaCreateWithoutMahasiswaInput!
}

input SoalMahasiswaUpsertWithWhereUniqueWithoutUjianInput {
  where: SoalMahasiswaWhereUniqueInput!
  update: SoalMahasiswaUpdateWithoutUjianDataInput!
  create: SoalMahasiswaCreateWithoutUjianInput!
}

input SoalMahasiswaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ujian: UjianWhereInput
  mahasiswa: MahasiswaWhereInput
  soals_every: SoalWhereInput
  soals_some: SoalWhereInput
  soals_none: SoalWhereInput
  jawaban_every: JawabanMahasiswaWhereInput
  jawaban_some: JawabanMahasiswaWhereInput
  jawaban_none: JawabanMahasiswaWhereInput
  ujianSelesai: Boolean
  ujianSelesai_not: Boolean
  skor: SkorWhereInput
  AND: [SoalMahasiswaWhereInput!]
  OR: [SoalMahasiswaWhereInput!]
  NOT: [SoalMahasiswaWhereInput!]
}

input SoalMahasiswaWhereUniqueInput {
  id: ID
}

enum SoalOrderByInput {
  id_ASC
  id_DESC
  pertanyaan_ASC
  pertanyaan_DESC
  image_ASC
  image_DESC
  tingkatKesulitan_ASC
  tingkatKesulitan_DESC
  kunciJawaban_ASC
  kunciJawaban_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SoalPreviousValues {
  id: ID!
  pertanyaan: String!
  image: String
  tingkatKesulitan: String!
  kunciJawaban: String!
}

type SoalSubscriptionPayload {
  mutation: MutationType!
  node: Soal
  updatedFields: [String!]
  previousValues: SoalPreviousValues
}

input SoalSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SoalWhereInput
  AND: [SoalSubscriptionWhereInput!]
  OR: [SoalSubscriptionWhereInput!]
  NOT: [SoalSubscriptionWhereInput!]
}

input SoalUpdateDataInput {
  pertanyaan: String
  image: String
  jawaban: JawabanUpdateManyWithoutSoalInput
  bankSoal: BankSoalUpdateOneRequiredWithoutSoalsInput
  tingkatKesulitan: String
  kunciJawaban: String
}

input SoalUpdateInput {
  pertanyaan: String
  image: String
  jawaban: JawabanUpdateManyWithoutSoalInput
  bankSoal: BankSoalUpdateOneRequiredWithoutSoalsInput
  tingkatKesulitan: String
  kunciJawaban: String
}

input SoalUpdateManyInput {
  create: [SoalCreateInput!]
  delete: [SoalWhereUniqueInput!]
  connect: [SoalWhereUniqueInput!]
  disconnect: [SoalWhereUniqueInput!]
  update: [SoalUpdateWithWhereUniqueNestedInput!]
  upsert: [SoalUpsertWithWhereUniqueNestedInput!]
}

input SoalUpdateManyWithoutBankSoalInput {
  create: [SoalCreateWithoutBankSoalInput!]
  delete: [SoalWhereUniqueInput!]
  connect: [SoalWhereUniqueInput!]
  disconnect: [SoalWhereUniqueInput!]
  update: [SoalUpdateWithWhereUniqueWithoutBankSoalInput!]
  upsert: [SoalUpsertWithWhereUniqueWithoutBankSoalInput!]
}

input SoalUpdateOneWithoutJawabanInput {
  create: SoalCreateWithoutJawabanInput
  update: SoalUpdateWithoutJawabanDataInput
  upsert: SoalUpsertWithoutJawabanInput
  delete: Boolean
  disconnect: Boolean
  connect: SoalWhereUniqueInput
}

input SoalUpdateWithoutBankSoalDataInput {
  pertanyaan: String
  image: String
  jawaban: JawabanUpdateManyWithoutSoalInput
  tingkatKesulitan: String
  kunciJawaban: String
}

input SoalUpdateWithoutJawabanDataInput {
  pertanyaan: String
  image: String
  bankSoal: BankSoalUpdateOneRequiredWithoutSoalsInput
  tingkatKesulitan: String
  kunciJawaban: String
}

input SoalUpdateWithWhereUniqueNestedInput {
  where: SoalWhereUniqueInput!
  data: SoalUpdateDataInput!
}

input SoalUpdateWithWhereUniqueWithoutBankSoalInput {
  where: SoalWhereUniqueInput!
  data: SoalUpdateWithoutBankSoalDataInput!
}

input SoalUpsertWithoutJawabanInput {
  update: SoalUpdateWithoutJawabanDataInput!
  create: SoalCreateWithoutJawabanInput!
}

input SoalUpsertWithWhereUniqueNestedInput {
  where: SoalWhereUniqueInput!
  update: SoalUpdateDataInput!
  create: SoalCreateInput!
}

input SoalUpsertWithWhereUniqueWithoutBankSoalInput {
  where: SoalWhereUniqueInput!
  update: SoalUpdateWithoutBankSoalDataInput!
  create: SoalCreateWithoutBankSoalInput!
}

input SoalWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  pertanyaan: String
  pertanyaan_not: String
  pertanyaan_in: [String!]
  pertanyaan_not_in: [String!]
  pertanyaan_lt: String
  pertanyaan_lte: String
  pertanyaan_gt: String
  pertanyaan_gte: String
  pertanyaan_contains: String
  pertanyaan_not_contains: String
  pertanyaan_starts_with: String
  pertanyaan_not_starts_with: String
  pertanyaan_ends_with: String
  pertanyaan_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  jawaban_every: JawabanWhereInput
  jawaban_some: JawabanWhereInput
  jawaban_none: JawabanWhereInput
  bankSoal: BankSoalWhereInput
  tingkatKesulitan: String
  tingkatKesulitan_not: String
  tingkatKesulitan_in: [String!]
  tingkatKesulitan_not_in: [String!]
  tingkatKesulitan_lt: String
  tingkatKesulitan_lte: String
  tingkatKesulitan_gt: String
  tingkatKesulitan_gte: String
  tingkatKesulitan_contains: String
  tingkatKesulitan_not_contains: String
  tingkatKesulitan_starts_with: String
  tingkatKesulitan_not_starts_with: String
  tingkatKesulitan_ends_with: String
  tingkatKesulitan_not_ends_with: String
  kunciJawaban: String
  kunciJawaban_not: String
  kunciJawaban_in: [String!]
  kunciJawaban_not_in: [String!]
  kunciJawaban_lt: String
  kunciJawaban_lte: String
  kunciJawaban_gt: String
  kunciJawaban_gte: String
  kunciJawaban_contains: String
  kunciJawaban_not_contains: String
  kunciJawaban_starts_with: String
  kunciJawaban_not_starts_with: String
  kunciJawaban_ends_with: String
  kunciJawaban_not_ends_with: String
  AND: [SoalWhereInput!]
  OR: [SoalWhereInput!]
  NOT: [SoalWhereInput!]
}

input SoalWhereUniqueInput {
  id: ID
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  angkatan(where: AngkatanSubscriptionWhereInput): AngkatanSubscriptionPayload
  bankSoal(where: BankSoalSubscriptionWhereInput): BankSoalSubscriptionPayload
  dosen(where: DosenSubscriptionWhereInput): DosenSubscriptionPayload
  jawaban(where: JawabanSubscriptionWhereInput): JawabanSubscriptionPayload
  jawabanMahasiswa(where: JawabanMahasiswaSubscriptionWhereInput): JawabanMahasiswaSubscriptionPayload
  jurusan(where: JurusanSubscriptionWhereInput): JurusanSubscriptionPayload
  kelas(where: KelasSubscriptionWhereInput): KelasSubscriptionPayload
  mahasiswa(where: MahasiswaSubscriptionWhereInput): MahasiswaSubscriptionPayload
  mataKuliah(where: MataKuliahSubscriptionWhereInput): MataKuliahSubscriptionPayload
  prodi(where: ProdiSubscriptionWhereInput): ProdiSubscriptionPayload
  skor(where: SkorSubscriptionWhereInput): SkorSubscriptionPayload
  soal(where: SoalSubscriptionWhereInput): SoalSubscriptionPayload
  soalMahasiswa(where: SoalMahasiswaSubscriptionWhereInput): SoalMahasiswaSubscriptionPayload
  tidakHadir(where: TidakHadirSubscriptionWhereInput): TidakHadirSubscriptionPayload
  ujian(where: UjianSubscriptionWhereInput): UjianSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type TidakHadir {
  id: ID!
  ujian: Ujian!
  mahasiswa: Mahasiswa!
}

type TidakHadirConnection {
  pageInfo: PageInfo!
  edges: [TidakHadirEdge]!
  aggregate: AggregateTidakHadir!
}

input TidakHadirCreateInput {
  ujian: UjianCreateOneWithoutTidakHadirsInput!
  mahasiswa: MahasiswaCreateOneInput!
}

input TidakHadirCreateManyWithoutUjianInput {
  create: [TidakHadirCreateWithoutUjianInput!]
  connect: [TidakHadirWhereUniqueInput!]
}

input TidakHadirCreateWithoutUjianInput {
  mahasiswa: MahasiswaCreateOneInput!
}

type TidakHadirEdge {
  node: TidakHadir!
  cursor: String!
}

enum TidakHadirOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TidakHadirPreviousValues {
  id: ID!
}

type TidakHadirSubscriptionPayload {
  mutation: MutationType!
  node: TidakHadir
  updatedFields: [String!]
  previousValues: TidakHadirPreviousValues
}

input TidakHadirSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TidakHadirWhereInput
  AND: [TidakHadirSubscriptionWhereInput!]
  OR: [TidakHadirSubscriptionWhereInput!]
  NOT: [TidakHadirSubscriptionWhereInput!]
}

input TidakHadirUpdateInput {
  ujian: UjianUpdateOneRequiredWithoutTidakHadirsInput
  mahasiswa: MahasiswaUpdateOneRequiredInput
}

input TidakHadirUpdateManyWithoutUjianInput {
  create: [TidakHadirCreateWithoutUjianInput!]
  delete: [TidakHadirWhereUniqueInput!]
  connect: [TidakHadirWhereUniqueInput!]
  disconnect: [TidakHadirWhereUniqueInput!]
  update: [TidakHadirUpdateWithWhereUniqueWithoutUjianInput!]
  upsert: [TidakHadirUpsertWithWhereUniqueWithoutUjianInput!]
}

input TidakHadirUpdateWithoutUjianDataInput {
  mahasiswa: MahasiswaUpdateOneRequiredInput
}

input TidakHadirUpdateWithWhereUniqueWithoutUjianInput {
  where: TidakHadirWhereUniqueInput!
  data: TidakHadirUpdateWithoutUjianDataInput!
}

input TidakHadirUpsertWithWhereUniqueWithoutUjianInput {
  where: TidakHadirWhereUniqueInput!
  update: TidakHadirUpdateWithoutUjianDataInput!
  create: TidakHadirCreateWithoutUjianInput!
}

input TidakHadirWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  ujian: UjianWhereInput
  mahasiswa: MahasiswaWhereInput
  AND: [TidakHadirWhereInput!]
  OR: [TidakHadirWhereInput!]
  NOT: [TidakHadirWhereInput!]
}

input TidakHadirWhereUniqueInput {
  id: ID
}

type Ujian {
  id: ID!
  pinPengawas: String
  pin: String
  nama: String!
  tanggalPelaksanaan: DateTime!
  lokasi: String!
  JumlahSoal: Int!
  presentasiSusah: Float!
  presentasiSedang: Float!
  presentasiMudah: Float!
  durasiPengerjaan: Int!
  status: Boolean!
  prodi: Prodi!
  bankSoal: BankSoal!
  kelas: Kelas!
  dosen: Dosen
  ujianSelesai: Boolean!
  soalMahasiswas(where: SoalMahasiswaWhereInput, orderBy: SoalMahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoalMahasiswa!]
  tidakHadirs(where: TidakHadirWhereInput, orderBy: TidakHadirOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TidakHadir!]
}

type UjianConnection {
  pageInfo: PageInfo!
  edges: [UjianEdge]!
  aggregate: AggregateUjian!
}

input UjianCreateInput {
  pinPengawas: String
  pin: String
  nama: String!
  tanggalPelaksanaan: DateTime!
  lokasi: String!
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int!
  status: Boolean
  prodi: ProdiCreateOneInput!
  bankSoal: BankSoalCreateOneInput!
  kelas: KelasCreateOneInput!
  dosen: DosenCreateOneInput
  ujianSelesai: Boolean
  soalMahasiswas: SoalMahasiswaCreateManyWithoutUjianInput
  tidakHadirs: TidakHadirCreateManyWithoutUjianInput
}

input UjianCreateOneInput {
  create: UjianCreateInput
  connect: UjianWhereUniqueInput
}

input UjianCreateOneWithoutSoalMahasiswasInput {
  create: UjianCreateWithoutSoalMahasiswasInput
  connect: UjianWhereUniqueInput
}

input UjianCreateOneWithoutTidakHadirsInput {
  create: UjianCreateWithoutTidakHadirsInput
  connect: UjianWhereUniqueInput
}

input UjianCreateWithoutSoalMahasiswasInput {
  pinPengawas: String
  pin: String
  nama: String!
  tanggalPelaksanaan: DateTime!
  lokasi: String!
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int!
  status: Boolean
  prodi: ProdiCreateOneInput!
  bankSoal: BankSoalCreateOneInput!
  kelas: KelasCreateOneInput!
  dosen: DosenCreateOneInput
  ujianSelesai: Boolean
  tidakHadirs: TidakHadirCreateManyWithoutUjianInput
}

input UjianCreateWithoutTidakHadirsInput {
  pinPengawas: String
  pin: String
  nama: String!
  tanggalPelaksanaan: DateTime!
  lokasi: String!
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int!
  status: Boolean
  prodi: ProdiCreateOneInput!
  bankSoal: BankSoalCreateOneInput!
  kelas: KelasCreateOneInput!
  dosen: DosenCreateOneInput
  ujianSelesai: Boolean
  soalMahasiswas: SoalMahasiswaCreateManyWithoutUjianInput
}

type UjianEdge {
  node: Ujian!
  cursor: String!
}

enum UjianOrderByInput {
  id_ASC
  id_DESC
  pinPengawas_ASC
  pinPengawas_DESC
  pin_ASC
  pin_DESC
  nama_ASC
  nama_DESC
  tanggalPelaksanaan_ASC
  tanggalPelaksanaan_DESC
  lokasi_ASC
  lokasi_DESC
  JumlahSoal_ASC
  JumlahSoal_DESC
  presentasiSusah_ASC
  presentasiSusah_DESC
  presentasiSedang_ASC
  presentasiSedang_DESC
  presentasiMudah_ASC
  presentasiMudah_DESC
  durasiPengerjaan_ASC
  durasiPengerjaan_DESC
  status_ASC
  status_DESC
  ujianSelesai_ASC
  ujianSelesai_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UjianPreviousValues {
  id: ID!
  pinPengawas: String
  pin: String
  nama: String!
  tanggalPelaksanaan: DateTime!
  lokasi: String!
  JumlahSoal: Int!
  presentasiSusah: Float!
  presentasiSedang: Float!
  presentasiMudah: Float!
  durasiPengerjaan: Int!
  status: Boolean!
  ujianSelesai: Boolean!
}

type UjianSubscriptionPayload {
  mutation: MutationType!
  node: Ujian
  updatedFields: [String!]
  previousValues: UjianPreviousValues
}

input UjianSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UjianWhereInput
  AND: [UjianSubscriptionWhereInput!]
  OR: [UjianSubscriptionWhereInput!]
  NOT: [UjianSubscriptionWhereInput!]
}

input UjianUpdateDataInput {
  pinPengawas: String
  pin: String
  nama: String
  tanggalPelaksanaan: DateTime
  lokasi: String
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int
  status: Boolean
  prodi: ProdiUpdateOneRequiredInput
  bankSoal: BankSoalUpdateOneRequiredInput
  kelas: KelasUpdateOneRequiredInput
  dosen: DosenUpdateOneInput
  ujianSelesai: Boolean
  soalMahasiswas: SoalMahasiswaUpdateManyWithoutUjianInput
  tidakHadirs: TidakHadirUpdateManyWithoutUjianInput
}

input UjianUpdateInput {
  pinPengawas: String
  pin: String
  nama: String
  tanggalPelaksanaan: DateTime
  lokasi: String
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int
  status: Boolean
  prodi: ProdiUpdateOneRequiredInput
  bankSoal: BankSoalUpdateOneRequiredInput
  kelas: KelasUpdateOneRequiredInput
  dosen: DosenUpdateOneInput
  ujianSelesai: Boolean
  soalMahasiswas: SoalMahasiswaUpdateManyWithoutUjianInput
  tidakHadirs: TidakHadirUpdateManyWithoutUjianInput
}

input UjianUpdateOneRequiredInput {
  create: UjianCreateInput
  update: UjianUpdateDataInput
  upsert: UjianUpsertNestedInput
  connect: UjianWhereUniqueInput
}

input UjianUpdateOneRequiredWithoutSoalMahasiswasInput {
  create: UjianCreateWithoutSoalMahasiswasInput
  update: UjianUpdateWithoutSoalMahasiswasDataInput
  upsert: UjianUpsertWithoutSoalMahasiswasInput
  connect: UjianWhereUniqueInput
}

input UjianUpdateOneRequiredWithoutTidakHadirsInput {
  create: UjianCreateWithoutTidakHadirsInput
  update: UjianUpdateWithoutTidakHadirsDataInput
  upsert: UjianUpsertWithoutTidakHadirsInput
  connect: UjianWhereUniqueInput
}

input UjianUpdateWithoutSoalMahasiswasDataInput {
  pinPengawas: String
  pin: String
  nama: String
  tanggalPelaksanaan: DateTime
  lokasi: String
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int
  status: Boolean
  prodi: ProdiUpdateOneRequiredInput
  bankSoal: BankSoalUpdateOneRequiredInput
  kelas: KelasUpdateOneRequiredInput
  dosen: DosenUpdateOneInput
  ujianSelesai: Boolean
  tidakHadirs: TidakHadirUpdateManyWithoutUjianInput
}

input UjianUpdateWithoutTidakHadirsDataInput {
  pinPengawas: String
  pin: String
  nama: String
  tanggalPelaksanaan: DateTime
  lokasi: String
  JumlahSoal: Int
  presentasiSusah: Float
  presentasiSedang: Float
  presentasiMudah: Float
  durasiPengerjaan: Int
  status: Boolean
  prodi: ProdiUpdateOneRequiredInput
  bankSoal: BankSoalUpdateOneRequiredInput
  kelas: KelasUpdateOneRequiredInput
  dosen: DosenUpdateOneInput
  ujianSelesai: Boolean
  soalMahasiswas: SoalMahasiswaUpdateManyWithoutUjianInput
}

input UjianUpsertNestedInput {
  update: UjianUpdateDataInput!
  create: UjianCreateInput!
}

input UjianUpsertWithoutSoalMahasiswasInput {
  update: UjianUpdateWithoutSoalMahasiswasDataInput!
  create: UjianCreateWithoutSoalMahasiswasInput!
}

input UjianUpsertWithoutTidakHadirsInput {
  update: UjianUpdateWithoutTidakHadirsDataInput!
  create: UjianCreateWithoutTidakHadirsInput!
}

input UjianWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  pinPengawas: String
  pinPengawas_not: String
  pinPengawas_in: [String!]
  pinPengawas_not_in: [String!]
  pinPengawas_lt: String
  pinPengawas_lte: String
  pinPengawas_gt: String
  pinPengawas_gte: String
  pinPengawas_contains: String
  pinPengawas_not_contains: String
  pinPengawas_starts_with: String
  pinPengawas_not_starts_with: String
  pinPengawas_ends_with: String
  pinPengawas_not_ends_with: String
  pin: String
  pin_not: String
  pin_in: [String!]
  pin_not_in: [String!]
  pin_lt: String
  pin_lte: String
  pin_gt: String
  pin_gte: String
  pin_contains: String
  pin_not_contains: String
  pin_starts_with: String
  pin_not_starts_with: String
  pin_ends_with: String
  pin_not_ends_with: String
  nama: String
  nama_not: String
  nama_in: [String!]
  nama_not_in: [String!]
  nama_lt: String
  nama_lte: String
  nama_gt: String
  nama_gte: String
  nama_contains: String
  nama_not_contains: String
  nama_starts_with: String
  nama_not_starts_with: String
  nama_ends_with: String
  nama_not_ends_with: String
  tanggalPelaksanaan: DateTime
  tanggalPelaksanaan_not: DateTime
  tanggalPelaksanaan_in: [DateTime!]
  tanggalPelaksanaan_not_in: [DateTime!]
  tanggalPelaksanaan_lt: DateTime
  tanggalPelaksanaan_lte: DateTime
  tanggalPelaksanaan_gt: DateTime
  tanggalPelaksanaan_gte: DateTime
  lokasi: String
  lokasi_not: String
  lokasi_in: [String!]
  lokasi_not_in: [String!]
  lokasi_lt: String
  lokasi_lte: String
  lokasi_gt: String
  lokasi_gte: String
  lokasi_contains: String
  lokasi_not_contains: String
  lokasi_starts_with: String
  lokasi_not_starts_with: String
  lokasi_ends_with: String
  lokasi_not_ends_with: String
  JumlahSoal: Int
  JumlahSoal_not: Int
  JumlahSoal_in: [Int!]
  JumlahSoal_not_in: [Int!]
  JumlahSoal_lt: Int
  JumlahSoal_lte: Int
  JumlahSoal_gt: Int
  JumlahSoal_gte: Int
  presentasiSusah: Float
  presentasiSusah_not: Float
  presentasiSusah_in: [Float!]
  presentasiSusah_not_in: [Float!]
  presentasiSusah_lt: Float
  presentasiSusah_lte: Float
  presentasiSusah_gt: Float
  presentasiSusah_gte: Float
  presentasiSedang: Float
  presentasiSedang_not: Float
  presentasiSedang_in: [Float!]
  presentasiSedang_not_in: [Float!]
  presentasiSedang_lt: Float
  presentasiSedang_lte: Float
  presentasiSedang_gt: Float
  presentasiSedang_gte: Float
  presentasiMudah: Float
  presentasiMudah_not: Float
  presentasiMudah_in: [Float!]
  presentasiMudah_not_in: [Float!]
  presentasiMudah_lt: Float
  presentasiMudah_lte: Float
  presentasiMudah_gt: Float
  presentasiMudah_gte: Float
  durasiPengerjaan: Int
  durasiPengerjaan_not: Int
  durasiPengerjaan_in: [Int!]
  durasiPengerjaan_not_in: [Int!]
  durasiPengerjaan_lt: Int
  durasiPengerjaan_lte: Int
  durasiPengerjaan_gt: Int
  durasiPengerjaan_gte: Int
  status: Boolean
  status_not: Boolean
  prodi: ProdiWhereInput
  bankSoal: BankSoalWhereInput
  kelas: KelasWhereInput
  dosen: DosenWhereInput
  ujianSelesai: Boolean
  ujianSelesai_not: Boolean
  soalMahasiswas_every: SoalMahasiswaWhereInput
  soalMahasiswas_some: SoalMahasiswaWhereInput
  soalMahasiswas_none: SoalMahasiswaWhereInput
  tidakHadirs_every: TidakHadirWhereInput
  tidakHadirs_some: TidakHadirWhereInput
  tidakHadirs_none: TidakHadirWhereInput
  AND: [UjianWhereInput!]
  OR: [UjianWhereInput!]
  NOT: [UjianWhereInput!]
}

input UjianWhereUniqueInput {
  id: ID
  pinPengawas: String
  pin: String
}

type User {
  id: ID!
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: [Permission!]!
  admin: Admin
  mahasiswa: Mahasiswa
  dosen: Dosen
  resetToken: String
  resetTokenExpiry: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateOneWithoutAdminInput {
  create: UserCreateWithoutAdminInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDosenInput {
  create: UserCreateWithoutDosenInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutMahasiswaInput {
  create: UserCreateWithoutMahasiswaInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutAdminInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateWithoutDosenInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  mahasiswa: MahasiswaCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserCreateWithoutMahasiswaInput {
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: UserCreatepermissionsInput
  admin: AdminCreateOneWithoutUserInput
  dosen: DosenCreateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  gambar_ASC
  gambar_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  passwordKasih_ASC
  passwordKasih_DESC
  resetToken_ASC
  resetToken_DESC
  resetTokenExpiry_ASC
  resetTokenExpiry_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  gambar: String
  email: String!
  password: String!
  passwordKasih: String
  permissions: [Permission!]!
  resetToken: String
  resetTokenExpiry: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateOneRequiredWithoutAdminInput {
  create: UserCreateWithoutAdminInput
  update: UserUpdateWithoutAdminDataInput
  upsert: UserUpsertWithoutAdminInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDosenInput {
  create: UserCreateWithoutDosenInput
  update: UserUpdateWithoutDosenDataInput
  upsert: UserUpsertWithoutDosenInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutMahasiswaInput {
  create: UserCreateWithoutMahasiswaInput
  update: UserUpdateWithoutMahasiswaDataInput
  upsert: UserUpsertWithoutMahasiswaInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutAdminDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateWithoutDosenDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  mahasiswa: MahasiswaUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpdateWithoutMahasiswaDataInput {
  gambar: String
  email: String
  password: String
  passwordKasih: String
  permissions: UserUpdatepermissionsInput
  admin: AdminUpdateOneWithoutUserInput
  dosen: DosenUpdateOneWithoutUserInput
  resetToken: String
  resetTokenExpiry: String
}

input UserUpsertWithoutAdminInput {
  update: UserUpdateWithoutAdminDataInput!
  create: UserCreateWithoutAdminInput!
}

input UserUpsertWithoutDosenInput {
  update: UserUpdateWithoutDosenDataInput!
  create: UserCreateWithoutDosenInput!
}

input UserUpsertWithoutMahasiswaInput {
  update: UserUpdateWithoutMahasiswaDataInput!
  create: UserCreateWithoutMahasiswaInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  gambar: String
  gambar_not: String
  gambar_in: [String!]
  gambar_not_in: [String!]
  gambar_lt: String
  gambar_lte: String
  gambar_gt: String
  gambar_gte: String
  gambar_contains: String
  gambar_not_contains: String
  gambar_starts_with: String
  gambar_not_starts_with: String
  gambar_ends_with: String
  gambar_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  passwordKasih: String
  passwordKasih_not: String
  passwordKasih_in: [String!]
  passwordKasih_not_in: [String!]
  passwordKasih_lt: String
  passwordKasih_lte: String
  passwordKasih_gt: String
  passwordKasih_gte: String
  passwordKasih_contains: String
  passwordKasih_not_contains: String
  passwordKasih_starts_with: String
  passwordKasih_not_starts_with: String
  passwordKasih_ends_with: String
  passwordKasih_not_ends_with: String
  admin: AdminWhereInput
  mahasiswa: MahasiswaWhereInput
  dosen: DosenWhereInput
  resetToken: String
  resetToken_not: String
  resetToken_in: [String!]
  resetToken_not_in: [String!]
  resetToken_lt: String
  resetToken_lte: String
  resetToken_gt: String
  resetToken_gte: String
  resetToken_contains: String
  resetToken_not_contains: String
  resetToken_starts_with: String
  resetToken_not_starts_with: String
  resetToken_ends_with: String
  resetToken_not_ends_with: String
  resetTokenExpiry: String
  resetTokenExpiry_not: String
  resetTokenExpiry_in: [String!]
  resetTokenExpiry_not_in: [String!]
  resetTokenExpiry_lt: String
  resetTokenExpiry_lte: String
  resetTokenExpiry_gt: String
  resetTokenExpiry_gte: String
  resetTokenExpiry_contains: String
  resetTokenExpiry_not_contains: String
  resetTokenExpiry_starts_with: String
  resetTokenExpiry_not_starts_with: String
  resetTokenExpiry_ends_with: String
  resetTokenExpiry_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    