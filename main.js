function getValueFromTable(value, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, 250);
  });
}

function logValue(value) {
  console.log(value);
}

getValueFromTable(0, true)
  .then(logValue)
  .then(() => getValueFromTable(1, true))
  .then(logValue)
  .then(() => getValueFromTable(3, true))
  .then(logValue)
  .then(() => getValueFromTable(6, true))
  .then(logValue)
  .then(() => getValueFromTable(8, true))
  .then(logValue)
  .then(() => getValueFromTable(0, false))
  .catch(logValue)
  .then(() => getValueFromTable(2, false))
  .catch(logValue)
  .then(() => getValueFromTable(3, false))
  .catch(logValue)
  .then(() => getValueFromTable(6, false))
  .catch(logValue)
  .then(() => getValueFromTable(7, false))
  .catch(logValue);
