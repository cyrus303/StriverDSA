// 34. Find First and Last Position of Element in Sorted Array
//
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.
//
//
//
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
//
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
//
// Example 3:
//
// Input: nums = [], target = 0
// Output: [-1,-1]

export {};

const arr = [5, 7, 7, 8, 8, 10];
const target = 8;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const searchPosition = (arr: number[], target: number, findFirst: boolean) => {
  let start = 0;
  let end = arr.length - 1;
  let position = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      if (findFirst) {
        position = mid;
        end = mid - 1;
      } else {
        position = mid;
        start = mid + 1;
      }
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return position;
};

const optimisedSolution = (arr: number[], target: number) => {
  const firstPos = searchPosition(arr, target, true);
  const lastPos = searchPosition(arr, target, false);
  return [firstPos, lastPos];
};

console.log(optimisedSolution(arr, target));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
