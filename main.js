const data = {
  p: 600,
  str: 'hello',
  y: -50,
};

function addRecord() {
  for (let record of arguments) {
    for (let key in record) {
      this[key] = record[key];
    }
  }
}
const arr = [{ x: 10 }, { y: 20 }, { z: 30, x: 50 }];
addRecord.call(data, { m: 10 }, { n: 20 }, { t: 30, m: 50 });
addRecord.apply(data, arr);
console.log(data);
