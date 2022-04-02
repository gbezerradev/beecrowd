var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = +lines.shift();
var B = +lines.shift();
var C = +lines.shift();
var D = +lines.shift();
var DIFERENCA = A * B - C * D;

console.log(`DIFERENCA = ${DIFERENCA}`);
