var input = require('fs').readFileSync('stdin', 'utf8');
var values = input.split(' ');

var A = +values.shift();
var B = +values.shift();
var C = +values.shift();

var maiorAB = A > B ? A : B;
var maior = maiorAB > C ? maiorAB : C;

console.log(`${maior} eh o maior`);
