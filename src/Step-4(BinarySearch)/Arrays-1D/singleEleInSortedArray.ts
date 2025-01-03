// 540. Single Element in a Sorted Array
// Medium
//
// You are given a sorted array consisting of only integers where every element appears exactly twice,
// except for one element which appears exactly once.
//
// Return the single element that appears only once.
//
// Your solution must run in O(log n) time and O(1) space.
//
// Example 1:
//
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
//
// Example 2:
//
// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

export {};

const arr = [5];

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid - 1] !== arr[mid] && arr[mid] !== arr[mid + 1]) return arr[mid];

    if (mid % 2 === 0) {
      if (arr[mid - 1] === arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid - 1] === arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
};

console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
