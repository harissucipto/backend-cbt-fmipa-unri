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

function getRandomSoal(storage, diminta) {
  // storage harus lebih besar dari diminta
  console.log(diminta);

  if (storage.length < diminta) {
    return [];
  }

  // fn acak  dari 1 sampai batas (dijadikan index array)
  const batasAcak = batas => Math.floor(Math.random() * batas);

  // hasil dari sini
  const hasilAcak = [];
  // copy storage
  const copyStorage = storage.map(item => item);

  while (hasilAcak.length < diminta) {
    const index = batasAcak(copyStorage.length);
    const item = copyStorage.splice(index, 1);
    hasilAcak.push(item);
  }

  return hasilAcak;
}

function notIncluded(total, ...minus) {
  const banList = minus.reduce((a, b) => a.concat(...b), []);
  return total.filter(item => banList.every(ban => ban.id !== item.id));
}

function concatSoal(...items) {
  return items.reduce((a, b) => a.concat(b), []);
}

const filterSoal = bankSoal => tingkatKesulitan =>
  bankSoal.filter(soal => soal.tingkatKesulitan === tingkatKesulitan);

const persenKeAngka = jumlahSoalUjian => presentasiDiminta =>
  Math.round((presentasiDiminta / 100) * jumlahSoalUjian);

function getSoalSiswa(bankSoal, presentasiSoal, jumlahSoalUjian) {
  const { presentasiMudah, presentasiSedang, presentasiSusah } = presentasiSoal;
  const pisahKanSoal = filterSoal(bankSoal);
  const soalDiminta = persenKeAngka(jumlahSoalUjian);
  const totalSoalMudah = soalDiminta(presentasiMudah);
  const totalSoalSedang = soalDiminta(presentasiSedang);
  const totalSoalSusah = soalDiminta(presentasiSusah);

  // kelompokkan
  const soalMudah = getRandomSoal(pisahKanSoal('MUDAH'), totalSoalMudah);
  const soalSedang = getRandomSoal(pisahKanSoal('SEDANG'), totalSoalSedang);
  const soalSusah = getRandomSoal(pisahKanSoal('SUSAH'), totalSoalSusah);
  const soalAcak = getRandomSoal(
    notIncluded(bankSoal, soalMudah, soalSedang, soalSusah),
    jumlahSoalUjian - totalSoalMudah - totalSoalSedang - totalSoalSusah,
  );

  return concatSoal(soalAcak, soalMudah, soalSedang, soalSusah);
}

exports.hasPermission = hasPermission;
exports.getRandomSoal = getRandomSoal;
exports.getSoalSiswa = getSoalSiswa;
