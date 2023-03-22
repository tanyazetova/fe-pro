// 1. розробити скрипт який буде запитувати ім’я користувача (userName) за допомогою prompt та вивести результат за допомогою alert:
let userName;
userName = prompt('Імя користувача');
// 1.1 перевірити змінну userName що вона не порожня, якщо порожня то за замовчуванням записати значення “anonym”. Відобразити значення змінної userName.
alert(userName || 'anonym');
userName = prompt('Імя користувача');
// 1.2 Якщо користувач ввів “admin”, то відобразити - “Hello admin”, якщо щось інше, то “Welcome”
alert((userName === 'admin' && 'Hello admin') || 'Welcome');

// 2. розробити скрипт який отримає від юзера(prompt) дані login, password, age
let login, password, age;
login = prompt('Логін');
password = prompt('Пароль');
age = prompt('Вік');
// 2.1. перевірити що login та password обидва поля не пусті, якщо хочаб одне пусте вивести повідомлення, “ login or password incorrect”, якщо всі заповнені то  ‘welcome’
alert(
  ((login === '' || password === '') && 'login or password incorrect') ||
    'Welcome'
);
// 2.2. дізнатися які саме поля було не заповнено та вивести підказку за допомогою alert()
login === '' && alert('не заповнено поле "Логін"');
password === '' && alert('не заповнено поле "Пароль"');
age === '' && alert('не заповнено поле "Вік"');
// 2.3.  перевірити одним виразом що змінна age заповнена та вік користувача від 18 до 28, якщо все добре то вивести повідомлення Hello, інакше Goobay
alert((age >= 18 && age <= 28 && 'Hello') || 'Goodbay');
