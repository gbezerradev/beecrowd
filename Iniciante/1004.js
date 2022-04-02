var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var valor1 = +lines.shift();
var valor2 = +lines.shift();
var PROD = valor1 * valor2;

console.log(`PROD = ${PROD}`);
