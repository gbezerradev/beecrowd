var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = +lines.shift();
var B = +lines.shift();
var SOMA = A + B;

console.log(`SOMA = ${SOMA}`);
