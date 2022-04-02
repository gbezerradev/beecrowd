var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var distanceTraveledInKm = +lines.shift();
var spentFuel = +lines.shift();
var averageConsumption = (distanceTraveledInKm / spentFuel).toFixed(3);

console.log(`${averageConsumption} km/l`);
