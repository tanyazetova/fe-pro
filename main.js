function getSomeSum() {
  let sum = 0;
  return function (x) {
    sum += x;
    return sum;
  };
}

const sum = getSomeSum();
console.log(sum(4));
console.log(sum(9));
console.log(sum(25));
