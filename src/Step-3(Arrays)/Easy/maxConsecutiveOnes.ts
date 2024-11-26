// Count Maximum Consecutive One's in the array
//
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.
//
// Examples:
//
// Example 1:
//
// Input: prices = {1, 1, 0, 1, 1, 1}
//
// Output: 3
//
// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.
//
// Input: prices = {1, 0, 1, 1, 0, 1}
//
// Output: 2
//
// Explanation: There are two consecutive 1's in the array.

export {};

const numbers = [1, 0, 1, 1, 0, 1];

const bruteForceSolution = (arr: number[]) => {
  let i = 0;
  let j = 0;
  let maxCount = 0;
  let count = 0;

  while (i <= j && j < arr.length) {
    if (arr[j] === 1) {
      j++;
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      i = j;
      j++;
      i++;
      count = 0;
    }
  }
  return maxCount;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let maxCount = 0;
  let currentCount = 0;

  for (const num of arr) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(currentCount, maxCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
