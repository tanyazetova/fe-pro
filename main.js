secondLawNewton = 'Програма розрахунку другого закону Ньютона';
force = 200; // Сила в Ньютонах
mass = 20; // Маса тіла в кілограмах
newLine = '</br></br>';
acceleration = force / mass; // Прискорення тіла в м/с^2

secondLawNewton =
  secondLawNewton +
  newLine +
  '**************' +
  newLine +
  'Прискорення тіла (a) при силі F = ' +
  force +
  ' та масі m = ' +
  mass +
  ':';
secondLawNewton = secondLawNewton + newLine + '--------------------';
secondLawNewton = secondLawNewton + newLine + 'a = ' + acceleration;
secondLawNewton = secondLawNewton + newLine + '-------------------';
secondLawNewton = secondLawNewton + newLine + 'end.';

document.write(secondLawNewton);
