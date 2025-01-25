// Row with max 1s
//
// Difficulty: Medium
//
// You are given a 2D binary array arr[][] consisting of only 1s and 0s.
// Each row of the array is sorted in non-decreasing order.
// Your task is to find and return the index of the first row that contains
// the maximum number of 1s. If no such row exists, return -1.
//
// Note:
//
// The array follows 0-based indexing.
// The number of rows and columns in the array are denoted by n and m respectively.
// Examples:
//
// Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// Output: 2
// Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.
//
// Input: arr[][] = [[0,0], [1,1]]
// Output: 1
// Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.
//
// Input: arr[][] = [[0,0], [0,0]]
// Output: -1
// Explanation: No row contains any 1s, so the output is -1.

export {};

const arr = [
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
];

const bruteForceSolution = (arr: number[][]) => {
  let maxCount = 0;
  let index = -1;
  const row = arr.length;
  const col = arr[0].length;

  for (let i = 0; i < row; i++) {
    let count = 0;
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === 1) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      index = i;
    }
  }
  return index;
};

// console.log(bruteForceSolution(arr));

const lowerBound = (input: number[], target: number = 1) => {
  let start = 0;
  let end = input.length - 1;
  let ans = input.length;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (input[mid] >= target) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return ans;
};

const optimisedSolution = (arr: number[][]) => {
  const row = arr.length;
  const col = arr[0].length;

  let countMax = 0;
  let index = -1;

  for (let i = 0; i < row; i++) {
    let countOnes = col - lowerBound(arr[i]);
    if (countOnes > countMax) {
      countMax = countOnes;
      index = i;
    }
  }
  return index;
};

console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
