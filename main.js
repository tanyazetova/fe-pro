const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const n = 7;

function generateKey(keyLength, charactersString) {
  let key = '';
  for (let i = 0; i < keyLength; i++) {
    let index = Math.floor(Math.random() * charactersString.length);
    key += charactersString[index];
  }
  return key;
}
const key = generateKey(n, characters);
console.log(key, 'generated key');
