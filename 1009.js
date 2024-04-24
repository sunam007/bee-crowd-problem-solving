/*
Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

- Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

- Don’t forget the blank spaces.

Input
The input file contains a text (employee's first name), and two double precision values, that are the seller's salary and the total value sold by him/her.

Output
Print the seller's total salary, according to the given example.
*/

const lines = ["SUNAM", 500, 1230.3];

const firstName = lines[0];
const fixedSalary = parseFloat(lines[1]);
const monthlySell = parseFloat(lines[2]);

const percentageOnSell = 15 / 100;

const sallaryOnMonthlySales = monthlySell * percentageOnSell;

const totalSalary = (fixedSalary + sallaryOnMonthlySales).toFixed(2);

console.log("TOTAL = R$", totalSalary);
