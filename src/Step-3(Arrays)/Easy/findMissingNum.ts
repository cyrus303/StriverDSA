// Find the missing number in an array
//
// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.
//
// Examples
// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result:
//  3
// Explanation:
// In the given array, number 3 is missing. So, 3 is the answer.
//
// Example 2:
// Input Format:
//  N = 3, array[] = {1,3}
// Result:
//  2
// Explanation:
// In the given array, number 2 is missing. So, 2 is the answer.

export {};

const N = 5;
const array = [1, 2, 0, 4];

const bruteForceSolution = (N: number, inputArr: number[]) => {
  let arr = new Array(N).fill("$");

  inputArr.forEach((ele) => {
    arr[ele] = ele;
  });
  const index = arr.findIndex((ele) => ele === "$");

  return index;
};

console.log(bruteForceSolution(N, array));

const optimisedSolution = (N: number, inputArr: number[]) => {
  const totalSum = (N * (N + 1)) / 2 - N;

  let sum = 0;
  inputArr.forEach((ele) => {
    sum += ele;
  });

  return totalSum - sum;
};

console.log(optimisedSolution(N, array));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
