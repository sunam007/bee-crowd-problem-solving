const _arr = [10.0, 10.0, 5.0];

const A = parseFloat(_arr[0]).toFixed(1);
const B = parseFloat(_arr[1]).toFixed(1);
const C = parseFloat(_arr[2]).toFixed(1);

const weightA = 2;
const weightB = 3;
const weightC = 5;

const weightedAvgOfA = A * weightA;
const weightedAvgOfB = B * weightB;
const weightedAvgOfC = C * weightC;

const totalWeightedAvg =
  (weightedAvgOfA + weightedAvgOfB + weightedAvgOfC) /
  (weightA + weightB + weightC);

let average = parseFloat(totalWeightedAvg).toFixed(1);

console.log("MEDIA =", average);
