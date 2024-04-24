/*
Create a program to sort a set of strings by their size. Its program is to receive a set of strings and return by this same size ordered set of words, if the size of the strings are equal, must maintain the original order of the set.

Input
The first line of input has a unique integer N that indicates the number of sets of strings, each set may contain between 1 and 50 inclusive elements, and each of the strings of the set may contain between 1 and 50 inclusive characters.

Output
The output should contain the set of input strings ordered by the length of strings.A blank space must be printed between two words.
*/

// take a integer N

// ex: if N = 4 , then 4 sets of strings ==>> "do not know what to do" , "Better late than never" , "Actions speak louder than words" , "Fortune favors the bold"

// "Better late than never" , breaks down each separate words ==>> Better , late , than , never

//  find out the length of each words

// compare the lengths , higher length's word go to the first position of the array

// if the lengths of the words are the same then , index will get priority.

const lines = [
  1,
  "do not know what to do",
  "Better late than never",
  "Actions speak louder than words",
  "Fortune favors the bold",
];

const N = parseInt(lines.shift());

let stringArr = [];

const setStringsToArray = (N) => {
  for (let i = 1; i <= N; i++) {
    const firstStr = lines[i];

    stringArr.push(firstStr);
  }
};

console.log("N = ", N, "strings arr ", stringArr);

// const wordsArr = stringArr.split(" ");

const compareLength = (a, b) => {
  return b.length - a.length;
};

// const sortedWordsArr = wordsArr.sort(compareLength);

// const sortedArrayToString = (arr) => {
//   return arr.join(" ");
// };

// const sortedString = sortedArrayToString(sortedWordsArr);

// const fixedSalary = parseFloat(lines[1]);
// const monthlySell = parseFloat(lines[2]);

// console.log("N =", N);
// console.log("first str =", firstStr);
// console.log("first str =", wordsArr);
// console.log(sortedString);
