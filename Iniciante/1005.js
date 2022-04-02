var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = +lines.shift();
var B = +lines.shift();
var media = (A * 3.5 + B * 7.5) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
