let userName = prompt('Введіть логін');
let password;

if (userName === null) {
  alert('Вхід скасовано');
} else if (userName === 'Адмін') {
  password = prompt('Введіть пароль');

  if (password === null) {
    alert('Вхід скасовано');
  } else if (password === 'Чорний володар') {
    alert('Вітаю!');
  } else {
    alert('Неправильний пароль');
  }
} else {
  alert('Я вас не знаю');
}
