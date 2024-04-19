// const _arr = [23, 23.0, "23", "23.0", undefined, null, "undefined", "null", ""];

const _arr = [
  "10.0",
  "20.0",
  0.0,
  NaN,
  7.1,
  10,
  20,
  "10",
  "20",
  NaN,
  undefined,
  null,
  "undefined",
  "null",
  "",
];

const A = parseFloat(_arr[0]).toFixed(1);
const B = parseFloat(_arr[1]).toFixed(1);

const weightA = 3.5;
const weightB = 7.5;

const weightedAvgOfA = A * weightA;
const weightedAvgOfB = B * weightB;

const totalWeightedAvg =
  (weightedAvgOfA + weightedAvgOfB) / (weightA + weightB);

let average = parseFloat(totalWeightedAvg).toFixed(5);

console.log("MEDIA =", average);
