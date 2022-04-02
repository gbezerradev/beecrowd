var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var employeeNumber = +lines.shift();
var workedHours = +lines.shift();
var earnPerHour = +lines.shift();
var salary = workedHours * earnPerHour;

console.log(`NUMBER = ${employeeNumber}\nSALARY = U$ ${salary.toFixed(2)}`);
