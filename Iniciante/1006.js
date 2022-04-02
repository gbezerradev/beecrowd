var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = +lines.shift();
var B = +lines.shift();
var C = +lines.shift();
var media = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
