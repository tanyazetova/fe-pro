const smartphones = {
  apple: ['iphone-10', 'iphone-11', 'iphone-12'],
  samsung: ['Galaxy A32', 'Galaxy A03s', 'Galaxy A73 5G'],
  oneplus: ['Nord AC2003', '9 LE2113', '8T KB2003'],
};
smartphones[Symbol.iterator] = function () {
  const values = Object.values(this).flat();
  const phones = [];

  for (const brand in this) {
    for (const name of this[brand]) {
      phones.push({ brand, name });
    }
  }

  return {
    finish: values.length,
    current: 0,
    next() {
      if (this.current < this.finish) {
        const phone = phones[this.current++];
        return { done: false, value: `${phone.brand} - ${phone.name}` };
      }

      return { done: true, value: undefined };
    },
  };
};
for (const smartphone of smartphones) {
  console.log(smartphone);
}
