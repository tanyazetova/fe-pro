const A = [];

for (i = 0; i < 10; i++) {
  A.push(Math.round(Math.random() * 10));
}

console.log(A, 'initial array');

for (i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    A[i] = 0;
  }
}
console.log(
  A,
  'replace each element of the array with an odd index with zero.'
);
