// Kadane's Algorithm : Maximum Subarray Sum in an Array
//
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.
//
// Examples
// Example 1:
// Input:
//  arr = [-2,1,-3,4,-1,2,1,-5,4]
//
// Output:
//  6
//
// Explanation:
//  [4,-1,2,1] has the largest sum = 6.
//
// Examples 2:
// Input:
//  arr = [1]
//
// Output:
//  1
//
// Explanation:
//  Array has only one element and which is giving positive sum of 1.

export {};

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const bruteForceSolution = (arr: number[]) => {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let currSum = 0;
    for (let j = i; j < arr.length; j++) {
      currSum += arr[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let n = arr.length;
  let localMaxima = 0;
  let globalMaxima = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    localMaxima = Math.max(arr[i], arr[i] + localMaxima);

    if (localMaxima > globalMaxima) {
      globalMaxima = localMaxima;
    }
  }
  return globalMaxima;
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
