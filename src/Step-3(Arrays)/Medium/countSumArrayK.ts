// 560. Subarray Sum Equals K
// Medium
//
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
//
// A subarray is a contiguous non-empty sequence of elements within an array.
//
// Example 1:
//
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
//
// Input: nums = [1,2,3], k = 3
// Output: 2

export {};

const numbers = [1, 1, 1, 2, 3, 4, 5, 2, 1, 7, 8, 9];
const target = 7;

const bruteForceSolution = (arr: number[], target: number) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum = sum + arr[j];
      if (sum === target) {
        count++;
      }
    }
  }
  return count;
};

console.log(bruteForceSolution(numbers, target));

const optimisedSolution = (arr: number[], target: number) => {
  const HASHMAP = new Map();

  HASHMAP.set(0, 1);
  let preSum = 0;
  let count = 0;

  for (let num of arr) {
    preSum += num;
    if (HASHMAP.has(preSum - target)) {
      count = count + HASHMAP.get(preSum - target);
    }
    HASHMAP.set(preSum, (HASHMAP.get(preSum) || 0) + 1);
  }
  return count;
};

console.log(optimisedSolution(numbers, target));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
