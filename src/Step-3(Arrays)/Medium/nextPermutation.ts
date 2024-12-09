// next_permutation : find next lexicographically greater permutation
//
// Problem Statement: Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.
//
// If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).
//
// Examples
// Example 1 :
//
// Input format:
//  Arr[] = {1,3,2}
// Output
// : Arr[] = {2,1,3}
// Explanation:
// All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.
// Example 2:
//
// Input format:
//  Arr[] = {3,2,1}
// Output:
// Arr[] = {1,2,3}
// Explanation:
// As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the topmost permutation.

export {};

const inputArr = [1, 2, 3];

const optimalSolution = (inputArr: number[]) => {
  console.log("inputArr ->", inputArr);

  let len = inputArr.length;
  let pivotIndex = -1;

  for (let i = len - 2; i >= 0; i--) {
    if (inputArr[i] < inputArr[i + 1]) {
      pivotIndex = i;
      break;
    }
  }
  for (let i = len - 1; i >= pivotIndex; i--) {
    if (inputArr[i] > inputArr[pivotIndex]) {
      [inputArr[pivotIndex], inputArr[i]] = [inputArr[i], inputArr[pivotIndex]];
      break;
    }
  }
  const afterIndexArray = inputArr.splice(pivotIndex + 1).reverse();
  const next_permutation = inputArr.concat(afterIndexArray);

  return next_permutation;
};

console.log("final answer ->", optimalSolution(inputArr));
