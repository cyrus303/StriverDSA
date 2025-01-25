// 74. Search a 2D Matrix
// Medium
//
// You are given an m x n integer matrix matrix with the following two properties:
//
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
//
// You must write a solution in O(log(m * n)) time complexity.
//
// Example 1:
//
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
//
// Example 2:
//
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

export {};

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

const target = 3;

const bruteForceSolution = (arr: number[][]) => {
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < n; i++) {
    if (arr[i][0] <= target && target <= arr[i][m - 1]) {
      for (let ele of arr[i]) {
        if (ele === target) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(bruteForceSolution(arr));

const optimisedSolution = (arr: number[][]) => {
  const n = arr.length;
  const m = arr[0].length;

  for (let i = 0; i < n; i++) {
    let start = 0;
    let end = m - 1;

    if (arr[i][start] <= target && target <= arr[i][end]) {
      while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[i][mid] === target) {
          return true;
        } else if (arr[i][mid] < target) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  }
  return false;
};

console.log(optimisedSolution(arr));

const optimalSolution = (arr: number[][]) => {
  const n = arr.length;
  const m = arr[0].length;
  const k = n * m - 1;

  let start = 0;
  let end = k;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;

    if (arr[row][col] === target) return true;
    else if (arr[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

console.log(optimalSolution(arr));
