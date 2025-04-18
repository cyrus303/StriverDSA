// Finding Sqrt of a number using Binary Search
//
// Problem Statement: You are given a positive integer n. Your task is to find and return its square root.
// If ‘n’ is not a perfect square, then return the floor value of 'sqrt(n)'.
//
// Note: The question explicitly states that if the given number, n, is not a perfect square,
// our objective is to find the maximum number, x, such that x squared is less than or equal to n (x*x <= n).
// In other words, we need to determine the floor value of the square root of n.
//
// Examples
// Example 1:
// Input Format:
//  n = 36
// Result:
//  6
// Explanation:
//  6 is the square root of 36.
//
// Example 2:
// Input Format:
//  n = 28
// Result:
//  5
// Explanation:
//  Square root of 28 is approximately 5.292. So, the floor value will be 5.

export {};

const num = 40;
// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (num: number) => {
  let start = 1;
  let end = num;
  let root = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const val = mid * mid;

    if (val <= num) {
      root = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return root;
};

console.log(optimisedSolution(num));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
