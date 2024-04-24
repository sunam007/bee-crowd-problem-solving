/*
In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

Input
The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

Output
The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.
*/

// The input file contains two lines of data , In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point. ex: const lines = ["12 1 5.3", "16 2 5.1"]; this is an example of lines containing integers and floating points.

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const lines = ["12 1 5.3", "16 2 5.1"];

// --------- the following code was wrong way of taking an input ---- //
// const code_of_product_1 = parseInt(lines.shift());
// const units_of_product_1 = parseInt(lines.shift());
// const price_of_product_1 = parseFloat(lines.shift());

// const code_of_product_2 = parseInt(lines.shift());
// const units_of_product_2 = parseInt(lines.shift());
// const price_of_product_2 = parseFloat(lines.shift());

const code_of_product_1 = parseInt(lines[0].split(" ")[0]);
const units_of_product_1 = parseInt(lines[0].split(" ")[1]);
const price_of_product_1 = parseFloat(lines[0].split(" ")[2]);

const code_of_product_2 = parseInt(lines[1].split(" ")[0]);
const units_of_product_2 = parseInt(lines[1].split(" ")[1]);
const price_of_product_2 = parseFloat(lines[1].split(" ")[2]);

const totalPrice =
  units_of_product_1 * price_of_product_1 +
  units_of_product_2 * price_of_product_2;

console.log("VALOR A PAGAR: R$", totalPrice.toFixed(2));
