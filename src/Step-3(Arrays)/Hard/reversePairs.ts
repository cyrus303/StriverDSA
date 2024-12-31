// 493. Reverse Pairs
// Hard
//
// Given an integer array nums, return the number of reverse pairs in the array.
//
// A reverse pair is a pair (i, j) where:
//
// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
//
// Example 1:
//
// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:
//
// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1

export {};

const numbers = [2, 4, 3, 5, 1];

const bruteForceSolution = (arr: number[]) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > 2 * arr[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log("brute force solution ->", bruteForceSolution(numbers));

const merge = (arr: number[], start: number, mid: number, end: number) => {
  let reverseCount = 0;
  let right = mid + 1;

  for (let left = start; left <= mid; left++) {
    while (right <= end && arr[left] > 2 * arr[right]) {
      right++;
    }
    reverseCount += right - (mid + 1);
  }

  const temp = [];
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let idx = 0; idx < temp.length; idx++) {
    arr[idx + start] = temp[idx];
  }
  return reverseCount;
};

const mergeSort = (arr: number[], start: number, end: number): number => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    const leftCount = mergeSort(arr, start, mid);
    const rightCount = mergeSort(arr, mid + 1, end);

    const mergeCount = merge(arr, start, mid, end);

    return leftCount + rightCount + mergeCount;
  }
  return 0;
};

const optimisedSolution = (arr: number[]) => {
  console.log("input ->", arr);
  const ans = mergeSort(arr, 0, arr.length - 1);
  console.log("reverse count ->", ans);
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
