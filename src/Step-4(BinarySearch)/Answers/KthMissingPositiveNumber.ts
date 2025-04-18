// 1539. Kth Missing Positive Number
// Easy
//
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
//
// Return the kth positive integer that is missing from this array.
//
// Example 1:
//
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
//
// Example 2:
//
// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

export {};

const arr = [1, 2, 3, 4];
const target = 2;

const bruteForceSolution = (arr: number[], target: number) => {
  let missingNo = -1;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    missingNo = arr[i] - (i + 1);
    if (missingNo >= target) {
      return arr[i - 1] + (target - (arr[i - 1] - i));
    }
  }

  if (missingNo === 0) return arr[n - 1] + target;
};

console.log(bruteForceSolution(arr, target));

const optimisedSolution = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let missingNo = arr[mid] - (mid + 1);

    if (missingNo < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end + target + 1;
};

console.log(optimisedSolution(arr, target));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
