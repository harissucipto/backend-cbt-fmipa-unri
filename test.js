function getRandomSoal(storage, diminta) {
  // storage harus lebih besar dari diminta
  if (storage.length < diminta) return [];

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

const bankSoalA = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
];

for (let i = 0; i < 10; i++) console.log(getRandomSoal(bankSoalA, 2));
