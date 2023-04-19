// Задача - 1
function renderObject() {
  for (let key in this) {
    if (key != 'renderObject') {
      document.write(key + ': ' + this[key] + '<br>');
    }
  }
}

const obj = {
  renderObject: renderObject,
  p: 600,
  str: 'hello',
  y: -50,
};
obj.renderObject();

// // Задача - 2
const data = {
  addRecord: function () {
    for (let record of arguments) {
      for (let key in record) {
        this[key] = record[key];
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50,
};
data.addRecord({ x: 10 }, { y: 20 }, { z: 30, x: 50 });
console.log(data); // 50
