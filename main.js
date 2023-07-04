function incrementCounter(blockId) {
  const counterElement = document
    .getElementById(blockId)
    .querySelector('input[type=number]');
  let counterValue = parseInt(counterElement.value);
  counterValue++;
  counterElement.value = counterValue;
  saveCounter(blockId, counterValue);
}

function saveCounter(blockId, counterValue) {
  localStorage.setItem(blockId, counterValue);
}

function getCounter(blockId) {
  let counterValue = localStorage.getItem(blockId);
  if (counterValue === null) {
    counterValue = 0;
  } else {
    counterValue = parseInt(counterValue);
  }
  return counterValue;
}

function setCounter() {
  const blockId = prompt('Введіть id блоку:');
  const counterValue = parseInt(prompt('Введіть значення лічильника:'));
  const counterElement = document
    .getElementById(blockId)
    ?.querySelector('input[type=number]');
  if (counterElement) {
    counterElement.value = counterValue;
    saveCounter(blockId, counterValue);
  } else {
    alert('Блок з таким id не знайдений.');
  }
}

function clearCounters() {
  const counterElements = document.querySelectorAll('input[type=number]');
  counterElements.forEach((counterElement) => {
    const blockId = counterElement.parentNode.id;
    counterElement.value = 0;
    saveCounter(blockId, 0);
  });
}

function start() {
  const counterElements = document.querySelectorAll('input[type=number]');
  counterElements.forEach((counterElement) => {
    const blockId = counterElement.parentNode.id;
    const counterValue = getCounter(blockId);
    counterElement.value = counterValue;
  });
}

start();
