// Merge Overlapping Sub-intervals
//
// Problem Statement: Given an array of intervals, merge all the overlapping intervals
// and return an array of non-overlapping intervals.
//
// Examples
//
// Example 1:
//
// Input:
//  intervals=[[1,3],[2,6],[8,10],[15,18]]
//
// Output:
//  [[1,6],[8,10],[15,18]]
//
// Explanation:
//  Since intervals [1,3] and [2,6] are overlapping we can merge them to form [1,6]
//  intervals.
//
// Example 2:
//
// Input:
//  [[1,4],[4,5]]
//
// Output:
//  [[1,5]]
//
// Explanation:
//  Since intervals [1,4] and [4,5] are overlapping we can merge them to form [1,5].

export {};

const intervals = [
  [1, 3],
  [8, 10],
  [2, 6],
  [9, 12],
  [15, 18],
];

const bruteForceSolution = (arr: number[][]) => {
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] >= arr[i + 1][0]) {
      arr[i][1] = Math.max(arr[i][1], arr[i + 1][1]);
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr;
};

console.log(bruteForceSolution(intervals));

const optimisedSolution = (arr: number[][]) => {
  const result = [];
  arr.sort((a, b) => a[0] - b[0]);

  let prevInterval = arr[0];
  result.push(prevInterval);

  for (let interval of arr) {
    if (interval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(prevInterval[1], interval[1]);
    } else {
      prevInterval = interval;
      result.push(prevInterval);
    }
  }
  return result;
};

console.log(optimisedSolution(intervals));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
