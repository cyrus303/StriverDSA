// 81. Search in Rotated Sorted Array II
// Medium
// There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
//
// Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
// (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
//
// Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
//
// You must decrease the overall operation steps as much as possible.
//
// Example 1:
//
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
//
// Example 2:
//
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

export {};

const arr = [1, 0, 1, 1, 1];
const target = 0;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return true;

    if (arr[start] === arr[mid] && arr[mid] === arr[end]) {
      start++;
      end--;
    } else if (arr[start] <= arr[mid]) {
      if (arr[start] <= target && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
};

console.log(optimisedSolution(arr, target));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
