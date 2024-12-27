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
  [2, 6],
  [8, 10],
  [15, 18],
];

const bruteForceSolution = (arr: number[][]) => {
  console.log("input ->", arr);

  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] >= arr[i + 1][0]) {
      result.push([arr[i][0], arr[i + 1][1]]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(bruteForceSolution(intervals));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
