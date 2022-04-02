var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// peça 1
var part1 = lines.shift().split(' ');
var partCode1 = part1.shift();
var quantityOfPieces1 = +part1.shift();
var valueOfPiece1 = +part1.shift();
var price1 = quantityOfPieces1 * valueOfPiece1;

// peça 2
var part2 = lines.shift().split(' ');
var partCode2 = part2.shift();
var quantityOfPieces2 = +part2.shift();
var valueOfPiece2 = +part2.shift();
var price2 = quantityOfPieces2 * valueOfPiece2;

var amountToPay = price1 + price2;

console.log(`VALOR A PAGAR: R$ ${amountToPay.toFixed(2)}`);
