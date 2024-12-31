// Implement Lower Bound
//
// Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.
//
// Pre-requisite: Binary Search algorithm
//
// Examples
// Example 1:
// Input Format:
//  N = 4, arr[] = {1,2,2,3}, x = 2
// Result:
//  1
// Explanation:
//  Index 1 is the smallest index such that arr[1] >= x.
//
// Example 2:
// Input Format:
//  N = 5, arr[] = {3,5,8,15,19}, x = 9
// Result:
//  3
// Explanation:
//  Index 3 is the smallest index such that arr[3] >= x.

export {};

const numbers = [3, 5, 8, 15, 19];
const target = 9;

const bruteForceSolution = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) {
      return i;
    }
  }
  return arr.length;
};

console.log(bruteForceSolution(numbers, target));

const optimisedSolution = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let lowerBound = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      lowerBound = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return lowerBound;
};

console.log(optimisedSolution(numbers, target));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
