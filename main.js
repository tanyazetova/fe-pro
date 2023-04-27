function cachebleProcess(cb) {
  const cache = {};
  return function () {
    const key = arguments.toString();
    if (key in cache) {
      return cache[key];
    }
    cache[key] = cb.apply(null, arguments);
    return cache[key];
  };
}

function metricsDecorator(fn) {
  return function () {
    const start = performance.now();
    fn.apply(null, arguments);
    const end = performance.now();
    return end - start;
  };
}

function calculeteFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  const result = n * calculeteFactorial(n - 1);
  return result;
}

function getArr(n) {
  const arr = [];
  for (let index = 0; index < n; index++) {
    arr.push(index);
  }
  return arr;
}

const memoFactorial = cachebleProcess(calculeteFactorial);
const memoArray = cachebleProcess(getArr);

console.log(metricsDecorator(memoFactorial)(500));
console.log(metricsDecorator(memoFactorial)(500));

console.log(metricsDecorator(memoArray)(50000));
console.log(metricsDecorator(memoArray)(50000));
