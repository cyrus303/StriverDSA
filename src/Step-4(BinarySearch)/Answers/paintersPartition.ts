//
// Painter's Partition Problem
//
// Problem Statement: Given an array/list of length ‘N’, where the array/list represents the boards and
// each element of the given array/list represents the length of each board. Some ‘K’ numbers of painters are available to paint these boards.
// Consider that each unit of a board takes 1 unit of time to paint. You are supposed to return the area of the minimum time to get this job
// done of painting all the ‘N’ boards under the constraint that any painter will only paint the continuous sections of boards.
//
// Pre-requisite: BS-18. Allocate Books or Book Allocation | Hard Binary Search
//
// Examples
//
// Example 1:
// Input Format:
//  N = 4, boards[] = {5, 5, 5, 5}, k = 2
// Result:
//  10
// Explanation:
//  We can divide the boards into 2 equal-sized partitions, so each painter gets 10 units of the board and the total time taken is 10.
//
// Example 2:
// Input Format:
//  N = 4, boards[] = {10, 20, 30, 40}, k = 2
// Result:
//  60
// Explanation:
//  We can divide the first 3 boards for one painter and the last board for the second painter.

export {};

const N = 5;
const boards = Array(5, 10, 30, 20, 15);
const k = 3;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const isValid = (boards: number[], k: number, maxAllowedTime: number) => {
  let painters = 1;
  let totalTime = 0;

  for (let timePerBoard of boards) {
    if (timePerBoard > maxAllowedTime) return false;
    if (timePerBoard + totalTime <= maxAllowedTime) {
      totalTime += timePerBoard;
    } else {
      painters++;
      totalTime = timePerBoard;
    }
  }

  return painters > k ? false : true;
};

const optimisedSolution = (N: number, boards: number[], k: number) => {
  let start = Math.min(...boards);
  let end = boards.reduce((board, sum) => sum + board, 0);
  let ans = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const validCase = isValid(boards, k, mid);

    if (validCase) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(optimisedSolution(N, boards, k));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
