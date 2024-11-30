// Two Sum : Check if a pair with given sum exists in Array
//
// Problem Statement: Given an array of integers arr[] and an integer target.
//
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
//
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise,
// we will return {-1, -1}.
//
// Note: You are not allowed to use the same element twice.
// Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.
//
// Examples:
//
// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.
//
// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

export {};

const numbers = [2, 6, 5, 8, 11];
const target = 14;

//NOTE: 2 for loops
const bruteForceSolution = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
};

console.log(bruteForceSolution(numbers, target));

//NOTE: HASHMAP
const optimisedSolution = (arr: number[], target: number) => {
  const HASHMAP = new Map();

  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];

    if (HASHMAP.has(compliment)) {
      return {
        a: HASHMAP.get(compliment),
        b: i,
      };
    } else {
      HASHMAP.set(arr[i], i);
    }
  }
  return "no pairs found";
};

console.log(optimisedSolution(numbers, target));

//NOTE:Two Pointer Method
const optimalSolution = (arr: number[], target: number) => {
  let left = 0;
  let right = arr.length;
  arr = arr.sort((a, b) => a - b);

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return { i: left, j: right };
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return "no pairs found";
};

console.log(optimalSolution(numbers, target));
