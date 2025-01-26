// 1903. Largest Odd Number in String
// Easy
//
// You are given a string num, representing a large integer.
// Return the largest-valued odd integer (as a string) that is a non-empty substring
// of num, or an empty string "" if no odd integer exists.
//
// A substring is a contiguous sequence of characters within a string.
//
// Example 1:
//
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
//
// Example 2:
//
// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
//
// Example 3:
//
// Input: num = "35427"
// Output: "35427"

export {};

const num = "4236";

const bruteForceSolution = (n: string) => {
  let index = -1;

  for (let i = n.length - 1; i >= 0; i--) {
    if (+n[i] % 2 !== 0) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    return n.substring(0, index + 1);
  } else {
    return "";
  }
};

console.log(bruteForceSolution(num));

// const optimisedSolution = (arr: number[]) => {};
//
// console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
