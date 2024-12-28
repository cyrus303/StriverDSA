// Find the repeating and missing numbers
//
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N]
// both inclusive. Each integer appears exactly once except A which appears twice and B which is missing.
// The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.
//
// Examples
// Example 1:
// Input Format
// :  array[] = {3,1,2,5,3}
// Result
// : {3,4)
// Explanation
// : A = 3 , B = 4
// Since 3 is appearing twice and 4 is missing
//
// Example 2:
// Input Format
// : array[] = {3,1,2,5,4,6,7,5}
// Result
// : {5,8)
// Explanation
// : A = 5 , B = 8
// Since 5 is appearing twice and 8 is missing

export {};

const numbers = [3, 1, 2, 5, 4, 6, 7, 5];

const bruteForceSolution = (arr: number[]) => {
  const HASH = new Map();
  let repeatNo = undefined;
  let missingNo = undefined;

  let sum = 0;
  let N = arr.length;
  let actualSum = (N * (N + 1)) / 2;

  for (let ele of arr) {
    HASH.set(ele, (HASH.get(ele) || 0) + 1);
    sum += ele;
  }

  for (let [key, value] of HASH) {
    if (value > 1) {
      repeatNo = key;
      sum = sum - key;
    }
  }

  missingNo = actualSum - sum;
  return [repeatNo, missingNo];
};

console.log(bruteForceSolution(numbers));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
