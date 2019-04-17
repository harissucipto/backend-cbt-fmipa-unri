function getRandomSoal(storage, diminta) {
  // storage harus lebih besar dari diminta
  if (storage.length < diminta) return [];

  // fn acak  dari 1 sampai batas (dijadikan index array)
  const batasAcak = batas => Math.floor(Math.random() * batas);

  // hasil dari sini
  const hasilAcak = [];
  // copy storage
  const copyStorage = storage.map(item => item);

  // lakukan pengacakan
  while (hasilAcak.length < diminta) {
    const index = batasAcak(copyStorage.length);
    const item = copyStorage.splice(index, 1);
    hasilAcak.push(item);
  }

  return hasilAcak;
}
// contoh
const bankSoalA = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' },
];
// // misalkan ada 10 mahasiswa dimana tiap mahasiswa mendapatkan 2 soal
// for (let i = 0; i < 10; i++) console.log(getRandomSoal(bankSoalA, 2));

// fungsi bantu buang soal yang sudah kepakai
function notIncluded(total, ...minus) {
  const banList = minus.reduce((a, b) => a.concat(...b), []);
  return total.filter(item => banList.every(ban => ban.id !== item.id));
}
// fungsi bantu  gabungkan soal
function concatSoal(...items) {
  return items.reduce((a, b) => a.concat(...b), []);
}
// fungsi bantu pisahkan soal berdasrkan tingkat kesulitan
const filterSoal = bankSoal => tingkatKesulitan =>
  bankSoal.filter(soal => soal.tingkatKesulitan === tingkatKesulitan);

// fungsi bantu konvrsi persen ke total yang dibutuhkan
const persenKeAngka = jumlahSoalUjian => presentasiDiminta =>
  Math.round((presentasiDiminta / 100) * jumlahSoalUjian);

// fungsi utama mendapatkan soal acak dari mahasiswa
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

  return concatSoal(soalAcak, soalMudah, soalSedang, soalSusah).map(item => ({ id: item.id }));
}

// contoh data yang dimiliki
const bankSoalB = [
  { id: '1', tingkatKesulitan: 'MUDAH' },
  { id: '2', tingkatKesulitan: 'MUDAH' },
  { id: '3', tingkatKesulitan: 'MUDAH' },
  { id: '4', tingkatKesulitan: 'SEDANG' },
  { id: '5', tingkatKesulitan: 'SEDANG' },
  { id: '6', tingkatKesulitan: 'SEDANG' },
  { id: '7', tingkatKesulitan: 'SUSAH' },
  { id: '8', tingkatKesulitan: 'SUSAH' },
  { id: '9', tingkatKesulitan: 'SUSAH' },
];

const persentasiTingkatKesulitanSoal = {
  presentasiMudah: 33, // 33 persen
  presentasiSedang: 33, // 33 persen
  presentasiSusah: 33, // 33 persen
};
const jumlahSoal = 3;

// misal ada 10 peserta ujian
for (let i = 0; i < 10; i++) {
  console.log(getSoalSiswa(bankSoalB, persentasiTingkatKesulitanSoal, jumlahSoal));
}
