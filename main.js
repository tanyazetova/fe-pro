const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const textarea = document.querySelector('#textarea');

setInterval(() => {
  const [text1, text2, text3] = textarea.value.split(',');
  if (input1.value != text1 || input2.value != text2 || input3.value != text3) {
    textarea.value = `${input1.value},${input2.value},${input3.value}`;
  }
}, 1000);
