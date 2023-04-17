const obj = { a: 10, b: 12, c: { f: 13, g: { m: 20 } } };
const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

function convert(obj) {
  let newObj = {};

  for (let key in obj) {
    if (isObject(obj[key])) {
      Object.assign(newObj, convert(obj[key]));
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

console.log(convert(obj));
