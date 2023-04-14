const mass = [1, [1, 2, 3, [3.1]], 4, [5, 6, [7, 8]]];

function flat(mass) {
  let result = [];

  for (let i = 0; i < mass.length; i++) {
    if (Array.isArray(mass[i])) {
      result = result.concat(flat(mass[i]));
    } else {
      result.push(mass[i]);
    }
  }

  return result;
}

console.log(flat(mass));
