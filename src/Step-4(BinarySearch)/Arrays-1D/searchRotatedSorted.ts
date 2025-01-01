// 33. Search in Rotated Sorted Array
// Medium
// There is an integer array nums sorted in ascending order (with distinct values).
//
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
//
// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or -1 if it is not in nums.
//
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
//
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
//
// Example 3:
//
// Input: nums = [1], target = 0
// Output: -1

export {};

const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start - end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(optimisedSolution(arr, target));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
