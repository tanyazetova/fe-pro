function metricsDecorator(fn) {
  return function () {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
  };
}

function someFunctionCallback() {
  let sum = 0;
  let i = 0;
  for (; i < 1e8; i++) {
    sum += i;
  }
  console.log(sum, i);
}

const analysePerfomace = metricsDecorator(someFunctionCallback);
const time = analysePerfomace();
console.log(`Час выконання функції = ${time} мс`);
