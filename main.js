function* getPartsOfWord(string) {
  let str;
  for (let i = 0; i < string.length; i++) {
    str = yield string.slice(0, i + 1) + (str || '');
  }
  return string;
}

const iterator = getPartsOfWord('hello');

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next('!'));
console.log(iterator.next());
console.log(iterator.next('@'));
console.log(iterator.next());

// {value: 'h', done: false}
// {value: 'he', done: false}
// {value: 'hel!', done: false}
// {value: 'hell', done: false}
// {value: 'hello@', done: false}
// {value: 'hello', done: true}
