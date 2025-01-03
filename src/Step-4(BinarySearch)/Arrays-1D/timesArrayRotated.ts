// Find out how many times the array has been rotated
//
// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values).
// Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated.
//
// Pre-requisites: Find minimum in Rotated Sorted Array,  Search in Rotated Sorted Array II & Binary Search algorithm
//
// Examples
//
// Example 1:
// Input Format:
//  arr = [4,5,6,7,0,1,2,3]
// Result:
//  4
// Explanation:
//  The original array should be [0,1,2,3,4,5,6,7]. So, we can notice that the array has been rotated 4 times.
//
// Example 2:
// Input Format:
//  arr = [3,4,5,1,2]
// Result:
//  3
// Explanation:
//  The original array should be [1,2,3,4,5]. So, we can notice that the array has been rotated 3 times.
export {};

const arr = [2, 2, 2, 2, 2];

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let start = 0;
  let end = arr.length - 1;
  let minIndex = -1;
  let minValue = Infinity;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[start] <= arr[mid]) {
      if (arr[start] < minValue) {
        minIndex = start;
        minValue = arr[start];
      }
      start = mid + 1;
    } else {
      if (arr[mid] < minValue) {
        minIndex = mid;
        minValue = arr[mid];
      }
      end = mid - 1;
    }
  }
  return minValue;
};

console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
