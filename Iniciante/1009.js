var sellerName = lines.shift();
var fixedSalary = +lines.shift();
var totalMoneyFromSales = +lines.shift();
var commission = totalMoneyFromSales * 0.15;
var salasalaryWithCommission = fixedSalary + commission;

console.log(`TOTAL = R$ ${salasalaryWithCommission.toFixed(2)}`);
