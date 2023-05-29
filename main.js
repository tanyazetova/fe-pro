function SuperMath() {}

SuperMath.prototype.operations = {
  '-': (x, y) => x - y,
  '+': (x, y) => +x + +y,
  '/': (x, y) => x / y,
  '*': (x, y) => x * y,
  '%': (x, y) => (x / y) * 100,
};

const math = new SuperMath();

math.input = function () {
  const X = prompt('X = ');
  const Y = prompt('Y = ');
  const znak = prompt('znak = ');
  if (!Object.keys(this.operations).includes(znak)) {
    alert(
      `Znak incorrect, use one of these: ${Object.keys(this.operations).join(
        ' '
      )}`
    );
    return this.input();
  }
  return { X, Y, znak };
};
math.check = function (obj) {
  if (
    obj &&
    obj.Y &&
    obj.X &&
    obj.znak &&
    Object.keys(this.operations).includes(obj.znak)
  ) {
    if (confirm(`Do you want to calculate ${obj.X} ${obj.znak} ${obj.Y}`)) {
      return this.operations[obj.znak](obj.X, obj.Y);
    } else {
      return this.check(this.input());
    }
  } else {
    return this.check(this.input());
  }
};

console.log(math.check({ X: 5, Y: 3, znak: '-' }));
