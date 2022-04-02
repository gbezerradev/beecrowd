var input = require('fs').readFileSync('stdin', 'utf8');
var values = input.split(' ');

var A = +values.shift();
var B = +values.shift();
var C = +values.shift();
var pi = 3.14159;

var triangleArea = ((A * C) / 2).toFixed(3);
var circleArea = (pi * C ** 2).toFixed(3);
var trapezeArea = (((A + B) * C) / 2).toFixed(3);
var squareArea = (B * B).toFixed(3);
var rectangleArea = (A * B).toFixed(3);

console.log(`TRIANGULO: ${triangleArea}
CIRCULO: ${circleArea}
TRAPEZIO: ${trapezeArea}
QUADRADO: ${squareArea}
RETANGULO: ${rectangleArea}`);
