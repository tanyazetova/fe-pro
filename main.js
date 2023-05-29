const smartphones = {
  apple: ['iphone-10', 'iphone-11', 'iphone-12'],
  samsung: ['Galaxy A32', 'Galaxy A03s', 'Galaxy A73 5G'],
  oneplus: ['Nord AC2003', '9 LE2113', '8T KB2003'],
};
smartphones[Symbol.iterator] = function () {
  const entries = Object.entries(this);

  let currentKeyIndex = 0;
  let currentValueIndex = 0;

  return {
    next: function () {
      if (currentValueIndex >= entries[currentKeyIndex][1].length) {
        currentKeyIndex++;
        currentValueIndex = 0;
      }

      if (currentKeyIndex >= entries.length) {
        return {
          done: true,
        };
      }

      const key = entries[currentKeyIndex][0];
      const value = entries[currentKeyIndex][1][currentValueIndex++];
      return {
        value: `${key} - ${value}`,
        done: false,
      };
    },
  };
};
for (const smartphone of smartphones) {
  console.log(smartphone);
}
