"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c; 

     if (d === 0) {
        arr = [-b/(2*a)];
    } else if (d > 0) {
        arr = [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a)];
    }
 return arr;
}

console.log(solveEquation());

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let mounthsPercent = percent / 100 / 12;
  let mounths = 12;
  let credit = amount - contribution;
  let monthlyPayment = credit * (mounthsPercent + (mounthsPercent / (((1 + mounthsPercent)**mounths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  Number(monthlyPayment * countMonths.toFixed(2));
  return monthlyPayment * countMonths;
 
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))
