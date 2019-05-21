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

  const urutan = hasilAcak.join('');
  return urutan;
}

const BankSoal = [1, 2, 3, 4];

const hasil = [];

for (let i = 0; i < 3000; i++) {
  hasil.push(getRandomSoal(BankSoal));
}

const countKey = (arr) => {
  // get key
  const obj = {};

  for (const key of arr) {
    obj[key] = obj[key] + 1 || 1;
  }

  return obj;

  // get value
};

console.log(countKey(hasil));
