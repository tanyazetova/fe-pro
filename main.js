document.write(
  '1. Вивести на сторінку в один рядок через кому числа від 10 до 20. </br>'
);

for (let i = 10; i <= 20; i++) {
  document.write(i);

  if (i != 20) {
    document.write(', ');
  }
}

document.write('</br>2. Вивести квадрати чисел від 10 до 20. </br>');
for (let i = 10; i <= 20; i++) {
  document.write(i * i);

  if (i != 20) {
    document.write(', ');
  }
}

document.write('</br>3. Вивести таблицю множення на 7. </br>');
const y = 7;

document.write('<table>');
for (let x = 1; x <= y; x++) {
  document.write('<tr>');
  document.write('<td>' + y + ' * ' + x + ' = ' + '</td>');
  document.write('<td>' + x * y + '</td>');
  document.write('</tr>');
}
document.write('</table>');

document.write('</br>4. Знайти суму всіх цілих чисел від 1 до 15. </br>');
let s = 0;

for (let i = 1; i <= 15; i++) {
  s += i;
}
document.write(s);

document.write('</br>5. Знайти добуток всіх цілих чисел від 15 до 35. </br>');
let m = 1;

for (let i = 15; i <= 35; i++) {
  m *= i;
}
document.write(m);

document.write(
  '</br>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500. </br>'
);
let v = 0;
const n = 500;

for (let i = 1; i <= n; i++) {
  v += i;
}
document.write(v / n);

document.write(
  '</br>7. Вивести суму лише парних чисел в діапазоні від 30 до 80. </br>'
);
let k = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    k += i;
  }
}
document.write(k);

document.write(
  '</br>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3. </br>'
);
let p = 0;

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    p += i;
  }
}
document.write(p);

document.write(
  ' </br>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.</br>'
);
let naturalNumber = +prompt('Enter any natural number');
let evenDevisorCount = 0,
  evenDevisorSum = 0;
if (isNaN(naturalNumber)) {
  alert('It is not a number');
} else {
  document.write('All devisors = ');
  for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
      document.write(i);
      if (i != naturalNumber) {
        document.write(', ');
      }
    }
    if (i % 2 === 0 && naturalNumber % i === 0) {
      evenDevisorCount++;
      evenDevisorSum = evenDevisorSum + i;
    }
  }
  document.write('</br>10. Визначити кількість його парних дільників.</br>');
  document.write('Even devisor count = ' + evenDevisorCount);
  document.write('</br>11. Знайти суму його парних дільників. </br>');
  document.write('Even devisor sum = ' + evenDevisorSum);
}

document.write(
  '</br>12. Надрукувати повну таблицю множення від 1 до 10. </br>'
);
let a = 10,
  b = 10;
document.write('<table>');
for (let i = 1; i <= a; i++) {
  document.write('<tr>');
  for (let j = 1; j <= b; j++) {
    document.write('<td>' + i * j + '</td>');
  }
  document.write('</tr>');
}
document.write('</table>');
