const inputRange = document.querySelector('.input-range');
const inputText = document.querySelector('.input-text');
const diagramValue = document.querySelector('.diagram-value');
const diagramFee = document.querySelector('.diagram-fee');
const result = document.querySelector('.result');

function onRangeChange(event) {
  inputText.value = event.target.value;
  updateDiagram(event.target.value);
}

function onInputChange(event) {
  if (+event.target.value > +event.target.max) {
    event.target.value = +event.target.max;
  }
  if (+event.target.value < +event.target.min) {
    event.target.value = +event.target.min;
  }
  inputRange.value = event.target.value;
  updateDiagram(event.target.value);
}

function updateDiagram(value) {
  value = +value;
  const fee = calculateFee(value);

  diagramValue.style.height = value + 'px';
  diagramFee.style.height = fee + 'px';
  result.innerHTML = value + fee;
}

function calculateFee(value) {
  switch (true) {
    case value < 20:
      return value * 0.02;
    case value < 50:
      return value * 0.04;
    case value < 75:
      return value * 0.06;
    case value <= 100:
      return value * 0.08;
  }
}

inputRange.addEventListener('change', onRangeChange);
inputText.addEventListener('change', onInputChange);

updateDiagram(inputRange.value);
