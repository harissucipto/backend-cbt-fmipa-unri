module.exports = {
        typeDefs: /* GraphQL */ `type Admin {
  id: ID!
  nama: String!
  user: User!
}

type AdminConnection {
  pageInfo: PageInfo!
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  nama: String!
  user: UserCreateOneWithoutAdminInput!
}

input AdminCreateOneWithoutUserInput {
  create: AdminCreateWithoutUserInput
  connect: AdminWhereUniqueInput
}

input AdminCreateWithoutUserInput {
  nama: String!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdminPreviousValues {
  id: ID!
  nama: String!
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

type AggregateDosen {
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

input AngkatanCreateOneInput {
  create: AngkatanCreateInput
  connect: AngkatanWhereUniqueInput
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

input AngkatanUpdateDataInput {
  nama: String
}

input AngkatanUpdateInput {
  nama: String
}

input AngkatanUpdateOneRequiredInput {
  create: AngkatanCreateInput
  update: AngkatanUpdateDataInput
  upsert: AngkatanUpsertNestedInput
  connect: AngkatanWhereUniqueInput
}

input AngkatanUpsertNestedInput {
  update: AngkatanUpdateDataInput!
  create: AngkatanCreateInput!
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

type BatchPayload {
  count: Long!
}

type Dosen {
  id: ID!
  nip: String!
  nama: String!
  user: User!
  jurusan: Jurusan!
  prodi(where: ProdiWhereInput, orderBy: ProdiOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Prodi!]
  mataKuliahs(where: MataKuliahWhereInput, orderBy: MataKuliahOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MataKuliah!]
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas!]
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
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateManyInput
  mataKuliahs: MataKuliahCreateManyWithoutDosensInput
  kelases: KelasCreateManyWithoutDosenInput
}

input DosenCreateManyWithoutMataKuliahsInput {
  create: [DosenCreateWithoutMataKuliahsInput!]
  connect: [DosenWhereUniqueInput!]
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
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateManyInput
  mataKuliahs: MataKuliahCreateManyWithoutDosensInput
}

input DosenCreateWithoutMataKuliahsInput {
  nip: String!
  nama: String!
  user: UserCreateOneWithoutDosenInput!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateManyInput
  kelases: KelasCreateManyWithoutDosenInput
}

input DosenCreateWithoutUserInput {
  nip: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateManyInput
  mataKuliahs: MataKuliahCreateManyWithoutDosensInput
  kelases: KelasCreateManyWithoutDosenInput
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DosenPreviousValues {
  id: ID!
  nip: String!
  nama: String!
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

input DosenUpdateInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateManyInput
  mataKuliahs: MataKuliahUpdateManyWithoutDosensInput
  kelases: KelasUpdateManyWithoutDosenInput
}

input DosenUpdateManyWithoutMataKuliahsInput {
  create: [DosenCreateWithoutMataKuliahsInput!]
  delete: [DosenWhereUniqueInput!]
  connect: [DosenWhereUniqueInput!]
  disconnect: [DosenWhereUniqueInput!]
  update: [DosenUpdateWithWhereUniqueWithoutMataKuliahsInput!]
  upsert: [DosenUpsertWithWhereUniqueWithoutMataKuliahsInput!]
}

input DosenUpdateOneRequiredWithoutKelasesInput {
  create: DosenCreateWithoutKelasesInput
  update: DosenUpdateWithoutKelasesDataInput
  upsert: DosenUpsertWithoutKelasesInput
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
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateManyInput
  mataKuliahs: MataKuliahUpdateManyWithoutDosensInput
}

input DosenUpdateWithoutMataKuliahsDataInput {
  nip: String
  nama: String
  user: UserUpdateOneRequiredWithoutDosenInput
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateManyInput
  kelases: KelasUpdateManyWithoutDosenInput
}

input DosenUpdateWithoutUserDataInput {
  nip: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateManyInput
  mataKuliahs: MataKuliahUpdateManyWithoutDosensInput
  kelases: KelasUpdateManyWithoutDosenInput
}

input DosenUpdateWithWhereUniqueWithoutMataKuliahsInput {
  where: DosenWhereUniqueInput!
  data: DosenUpdateWithoutMataKuliahsDataInput!
}

input DosenUpsertWithoutKelasesInput {
  update: DosenUpdateWithoutKelasesDataInput!
  create: DosenCreateWithoutKelasesInput!
}

input DosenUpsertWithoutUserInput {
  update: DosenUpdateWithoutUserDataInput!
  create: DosenCreateWithoutUserInput!
}

input DosenUpsertWithWhereUniqueWithoutMataKuliahsInput {
  where: DosenWhereUniqueInput!
  update: DosenUpdateWithoutMataKuliahsDataInput!
  create: DosenCreateWithoutMataKuliahsInput!
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
  jurusan: JurusanWhereInput
  prodi_every: ProdiWhereInput
  prodi_some: ProdiWhereInput
  prodi_none: ProdiWhereInput
  mataKuliahs_every: MataKuliahWhereInput
  mataKuliahs_some: MataKuliahWhereInput
  mataKuliahs_none: MataKuliahWhereInput
  kelases_every: KelasWhereInput
  kelases_some: KelasWhereInput
  kelases_none: KelasWhereInput
  AND: [DosenWhereInput!]
  OR: [DosenWhereInput!]
  NOT: [DosenWhereInput!]
}

input DosenWhereUniqueInput {
  id: ID
  nip: String
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

input JurusanCreateOneInput {
  create: JurusanCreateInput
  connect: JurusanWhereUniqueInput
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

input JurusanUpdateDataInput {
  nama: String
  prodis: ProdiUpdateManyWithoutJurusanInput
}

input JurusanUpdateInput {
  nama: String
  prodis: ProdiUpdateManyWithoutJurusanInput
}

input JurusanUpdateOneRequiredInput {
  create: JurusanCreateInput
  update: JurusanUpdateDataInput
  upsert: JurusanUpsertNestedInput
  connect: JurusanWhereUniqueInput
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

input JurusanUpsertNestedInput {
  update: JurusanUpdateDataInput!
  create: JurusanCreateInput!
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
  jurusan: Jurusan!
  prodi: Prodi!
  dosen: Dosen!
  mataKuliah: MataKuliah!
  nama: String!
  mahasiswas(where: MahasiswaWhereInput, orderBy: MahasiswaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Mahasiswa!]
}

type KelasConnection {
  pageInfo: PageInfo!
  edges: [KelasEdge]!
  aggregate: AggregateKelas!
}

input KelasCreateInput {
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput!
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput!
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

input KelasCreateWithoutDosenInput {
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput!
  nama: String!
  mahasiswas: MahasiswaCreateManyWithoutKelasesInput
}

input KelasCreateWithoutMahasiswasInput {
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput!
  mataKuliah: MataKuliahCreateOneWithoutKelasesInput!
  nama: String!
}

input KelasCreateWithoutMataKuliahInput {
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  dosen: DosenCreateOneWithoutKelasesInput!
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

input KelasUpdateInput {
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneRequiredWithoutKelasesInput
  mataKuliah: MataKuliahUpdateOneRequiredWithoutKelasesInput
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

input KelasUpdateWithoutDosenDataInput {
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  mataKuliah: MataKuliahUpdateOneRequiredWithoutKelasesInput
  nama: String
  mahasiswas: MahasiswaUpdateManyWithoutKelasesInput
}

input KelasUpdateWithoutMahasiswasDataInput {
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneRequiredWithoutKelasesInput
  mataKuliah: MataKuliahUpdateOneRequiredWithoutKelasesInput
  nama: String
}

input KelasUpdateWithoutMataKuliahDataInput {
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  dosen: DosenUpdateOneRequiredWithoutKelasesInput
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
  jurusan: JurusanWhereInput
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
  jurusan: Jurusan!
  prodi: Prodi!
  user: User!
  kelases(where: KelasWhereInput, orderBy: KelasOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Kelas!]
  angkatan: Angkatan!
}

type MahasiswaConnection {
  pageInfo: PageInfo!
  edges: [MahasiswaEdge]!
  aggregate: AggregateMahasiswa!
}

input MahasiswaCreateInput {
  nim: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  user: UserCreateOneWithoutMahasiswaInput!
  kelases: KelasCreateManyWithoutMahasiswasInput
  angkatan: AngkatanCreateOneInput!
}

input MahasiswaCreateManyWithoutKelasesInput {
  create: [MahasiswaCreateWithoutKelasesInput!]
  connect: [MahasiswaWhereUniqueInput!]
}

input MahasiswaCreateOneWithoutUserInput {
  create: MahasiswaCreateWithoutUserInput
  connect: MahasiswaWhereUniqueInput
}

input MahasiswaCreateWithoutKelasesInput {
  nim: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  user: UserCreateOneWithoutMahasiswaInput!
  angkatan: AngkatanCreateOneInput!
}

input MahasiswaCreateWithoutUserInput {
  nim: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutMahasiswasInput
  angkatan: AngkatanCreateOneInput!
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
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MahasiswaPreviousValues {
  id: ID!
  nim: String!
  nama: String!
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

input MahasiswaUpdateInput {
  nim: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  angkatan: AngkatanUpdateOneRequiredInput
}

input MahasiswaUpdateManyWithoutKelasesInput {
  create: [MahasiswaCreateWithoutKelasesInput!]
  delete: [MahasiswaWhereUniqueInput!]
  connect: [MahasiswaWhereUniqueInput!]
  disconnect: [MahasiswaWhereUniqueInput!]
  update: [MahasiswaUpdateWithWhereUniqueWithoutKelasesInput!]
  upsert: [MahasiswaUpsertWithWhereUniqueWithoutKelasesInput!]
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
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  user: UserUpdateOneRequiredWithoutMahasiswaInput
  angkatan: AngkatanUpdateOneRequiredInput
}

input MahasiswaUpdateWithoutUserDataInput {
  nim: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutMahasiswasInput
  angkatan: AngkatanUpdateOneRequiredInput
}

input MahasiswaUpdateWithWhereUniqueWithoutKelasesInput {
  where: MahasiswaWhereUniqueInput!
  data: MahasiswaUpdateWithoutKelasesDataInput!
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
  jurusan: JurusanWhereInput
  prodi: ProdiWhereInput
  user: UserWhereInput
  kelases_every: KelasWhereInput
  kelases_some: KelasWhereInput
  kelases_none: KelasWhereInput
  angkatan: AngkatanWhereInput
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
  jurusan: Jurusan!
  prodi: Prodi!
  dosens(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dosen!]
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
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  dosens: DosenCreateManyWithoutMataKuliahsInput
  kelases: KelasCreateManyWithoutMataKuliahInput
}

input MataKuliahCreateManyWithoutDosensInput {
  create: [MataKuliahCreateWithoutDosensInput!]
  connect: [MataKuliahWhereUniqueInput!]
}

input MataKuliahCreateOneWithoutKelasesInput {
  create: MataKuliahCreateWithoutKelasesInput
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahCreateWithoutDosensInput {
  kode: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  kelases: KelasCreateManyWithoutMataKuliahInput
}

input MataKuliahCreateWithoutKelasesInput {
  kode: String!
  nama: String!
  jurusan: JurusanCreateOneInput!
  prodi: ProdiCreateOneInput!
  dosens: DosenCreateManyWithoutMataKuliahsInput
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

input MataKuliahUpdateInput {
  kode: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  dosens: DosenUpdateManyWithoutMataKuliahsInput
  kelases: KelasUpdateManyWithoutMataKuliahInput
}

input MataKuliahUpdateManyWithoutDosensInput {
  create: [MataKuliahCreateWithoutDosensInput!]
  delete: [MataKuliahWhereUniqueInput!]
  connect: [MataKuliahWhereUniqueInput!]
  disconnect: [MataKuliahWhereUniqueInput!]
  update: [MataKuliahUpdateWithWhereUniqueWithoutDosensInput!]
  upsert: [MataKuliahUpsertWithWhereUniqueWithoutDosensInput!]
}

input MataKuliahUpdateOneRequiredWithoutKelasesInput {
  create: MataKuliahCreateWithoutKelasesInput
  update: MataKuliahUpdateWithoutKelasesDataInput
  upsert: MataKuliahUpsertWithoutKelasesInput
  connect: MataKuliahWhereUniqueInput
}

input MataKuliahUpdateWithoutDosensDataInput {
  kode: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  kelases: KelasUpdateManyWithoutMataKuliahInput
}

input MataKuliahUpdateWithoutKelasesDataInput {
  kode: String
  nama: String
  jurusan: JurusanUpdateOneRequiredInput
  prodi: ProdiUpdateOneRequiredInput
  dosens: DosenUpdateManyWithoutMataKuliahsInput
}

input MataKuliahUpdateWithWhereUniqueWithoutDosensInput {
  where: MataKuliahWhereUniqueInput!
  data: MataKuliahUpdateWithoutDosensDataInput!
}

input MataKuliahUpsertWithoutKelasesInput {
  update: MataKuliahUpdateWithoutKelasesDataInput!
  create: MataKuliahCreateWithoutKelasesInput!
}

input MataKuliahUpsertWithWhereUniqueWithoutDosensInput {
  where: MataKuliahWhereUniqueInput!
  update: MataKuliahUpdateWithoutDosensDataInput!
  create: MataKuliahCreateWithoutDosensInput!
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
  jurusan: JurusanWhereInput
  prodi: ProdiWhereInput
  dosens_every: DosenWhereInput
  dosens_some: DosenWhereInput
  dosens_none: DosenWhereInput
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
  createDosen(data: DosenCreateInput!): Dosen!
  updateDosen(data: DosenUpdateInput!, where: DosenWhereUniqueInput!): Dosen
  updateManyDosens(data: DosenUpdateInput!, where: DosenWhereInput): BatchPayload!
  upsertDosen(where: DosenWhereUniqueInput!, create: DosenCreateInput!, update: DosenUpdateInput!): Dosen!
  deleteDosen(where: DosenWhereUniqueInput!): Dosen
  deleteManyDosens(where: DosenWhereInput): BatchPayload!
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

input ProdiCreateManyInput {
  create: [ProdiCreateInput!]
  connect: [ProdiWhereUniqueInput!]
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

input ProdiUpdateManyInput {
  create: [ProdiCreateInput!]
  delete: [ProdiWhereUniqueInput!]
  connect: [ProdiWhereUniqueInput!]
  disconnect: [ProdiWhereUniqueInput!]
  update: [ProdiUpdateWithWhereUniqueNestedInput!]
  upsert: [ProdiUpsertWithWhereUniqueNestedInput!]
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

input ProdiUpdateWithWhereUniqueNestedInput {
  where: ProdiWhereUniqueInput!
  data: ProdiUpdateDataInput!
}

input ProdiUpdateWithWhereUniqueWithoutJurusanInput {
  where: ProdiWhereUniqueInput!
  data: ProdiUpdateWithoutJurusanDataInput!
}

input ProdiUpsertNestedInput {
  update: ProdiUpdateDataInput!
  create: ProdiCreateInput!
}

input ProdiUpsertWithWhereUniqueNestedInput {
  where: ProdiWhereUniqueInput!
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
}

type Query {
  admin(where: AdminWhereUniqueInput!): Admin
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  angkatan(where: AngkatanWhereUniqueInput!): Angkatan
  angkatans(where: AngkatanWhereInput, orderBy: AngkatanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Angkatan]!
  angkatansConnection(where: AngkatanWhereInput, orderBy: AngkatanOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AngkatanConnection!
  dosen(where: DosenWhereUniqueInput!): Dosen
  dosens(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dosen]!
  dosensConnection(where: DosenWhereInput, orderBy: DosenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DosenConnection!
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
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  angkatan(where: AngkatanSubscriptionWhereInput): AngkatanSubscriptionPayload
  dosen(where: DosenSubscriptionWhereInput): DosenSubscriptionPayload
  jurusan(where: JurusanSubscriptionWhereInput): JurusanSubscriptionPayload
  kelas(where: KelasSubscriptionWhereInput): KelasSubscriptionPayload
  mahasiswa(where: MahasiswaSubscriptionWhereInput): MahasiswaSubscriptionPayload
  mataKuliah(where: MataKuliahSubscriptionWhereInput): MataKuliahSubscriptionPayload
  prodi(where: ProdiSubscriptionWhereInput): ProdiSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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
    