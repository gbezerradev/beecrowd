var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var sphereRadius = lines.shift();
var pi = 3.14159;
var sphereVolume = (4 / 3) * pi * sphereRadius ** 3;

console.log(`VOLUME = ${sphereVolume.toFixed(3)}`);
