function assignObjects(obj1, obj2, flag) {
  const result = {};

  for (let key in obj1) {
    result[key] = obj1[key];
  }
  for (let key in obj2) {
    result[key] = result.hasOwnProperty(key) && flag ? obj1[key] : obj2[key];
  }

  return result;
}

console.log(assignObjects({ x: 10, y: 20 }, { z: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }));
console.log(assignObjects({ x: 10 }, { x: 20, y: 30 }, true));

function assignObjectsMultiple() {
  const result = {};

  for (let obj of arguments) {
    for (let key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log(
  assignObjectsMultiple(
    { x: 10, y: 20 },
    { z: 30 },
    { a: 50 },
    { b: 70, c: 80 }
  )
);
