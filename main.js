const object = {
  result: '',
  resultKey: 'result',
  copy: function (key) {
    this[key] = this[this.resultKey];
    return this;
  },
  clear: function () {
    this[this.resultKey] = 0;
    return this;
  },
  doFunction: function (cb, x, y) {
    this[this.resultKey] = cb(x, y);
    return this;
  },
  target: function (property) {
    this[property] = this[this.resultKey];
    delete this[this.resultKey];
    this.resultKey = property;
    return this;
  },
};

function sum(x, y) {
  return x + y;
}

object
  .doFunction(sum, 2, 4)
  .copy('nom_name')
  .target('summary')
  .doFunction(sum, 2, 4);

console.log(object.summary); // 6

object.clear();

console.log(object.summary); // 0
