function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave));
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

function getRandomSoal(storage) {
  // storage harus lebih besar dari diminta
  const diminta = storage.length;

  if (storage.length < diminta) {
    return [];
  }

  // fn acak  dari 1 sampai batas (dijadikan index array)
  const batasAcak = batas => Math.floor(Math.random() * batas);
  // hasil dari sini
  const hasilAcak = [];
  // copy storage
  const copyStorage = storage.map((item, i) => i + 1);

  while (hasilAcak.length < diminta) {
    const index = batasAcak(copyStorage.length);
    const [item] = copyStorage.splice(index, 1);
    hasilAcak.push(item);
  }

  const urutan = hasilAcak.join(',');

  return urutan;
}

async function promiseCreateSoal(ctx, mahasiswas, soals, idUjian) {
  const results = [];

  for (const mahasiswa of mahasiswas) {
    console.log(getRandomSoal(soals), 'random');
    results.push(ctx.db.mutation.createSoalMahasiswa(
      {
        data: {
          ujian: {
            connect: {
              id: idUjian,
            },
          },
          mahasiswa: {
            connect: {
              id: mahasiswa.id,
            },
          },
          urutan: getRandomSoal(soals),
        },
      },
      `{
          id
        }
        `,
    ));
  }
  return Promise.all(results);
}

exports.hasPermission = hasPermission;
exports.getRandomSoal = getRandomSoal;
exports.promiseCreateSoal = promiseCreateSoal;
