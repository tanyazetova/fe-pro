function readInputs(inputs, textarea) {
  const inputValues = Array.from(inputs)
    .map((input) => input.value)
    .join(',');

  if (textarea.value !== inputValues) {
    textarea.value = inputValues;
  }
}

const inputs = document.querySelectorAll('.input-field');
const textarea = document.querySelector('#textarea');

setInterval(() => {
  readInputs(inputs, textarea);
}, 1000);
