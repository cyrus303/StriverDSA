// AGGRCOW - Aggressive cows
// #binary-search
//
// Farmer John has built a new long barn, with N (2 <= N <= 100,000) stalls.
// The stalls are located along a straight line at positions x1 ... xN (0 <= xi <= 1,000,000,000).
//
// His C (2 <= C <= N) cows don't like this barn layout and become aggressive towards each other once put into a stall.
// To prevent the cows from hurting each other, FJ wants to assign the cows to the stalls,
// such that the minimum distance between any two of them is as large as possible.
// What is the largest minimum distance?
//
// Input
// t – the number of test cases, then t test cases follows.
// * Line 1: Two space-separated integers: N and C
// * Lines 2..N+1: Line i+1 contains an integer stall location, xi

export {};

const arr = [1, 2, 8, 4, 9];
const N = 5;
const k = 3;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const isPossible = (arr: number[], k: number, minAllowedDistance: number) => {
  let cows = 1;
  let lastStallPos = arr[0];

  for (let currentPos of arr) {
    if (currentPos - lastStallPos >= minAllowedDistance) {
      cows++;
      lastStallPos = currentPos;
    }
    if (cows === k) return true;
  }
  return false;
};

const optimisedSolution = (arr: number[], N: number, k: number) => {
  arr = arr.sort((a, b) => a - b);

  let start = 1;
  let end = arr.at(-1)! - arr[0];
  let ans = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const possibleCase = isPossible(arr, k, mid);

    if (possibleCase) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

console.log(optimisedSolution(arr, N, k));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
