// 50. Pow(x, n)
// Medium
//
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
//
// Example 1:
//
// Input: x = 2.00000, n = 10
// Output: 1024.00000
//
// Example 2:
//
// Input: x = 2.10000, n = 3
// Output: 9.26100
//
// Example 3:
//
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

export {};

const x = 2.0;
const n = -200000000;

const bruteForceSolution = (x: number, n: number): number => {
  const absN = Math.abs(n);
  let result = helper(x, absN);
  if (n < 0) {
    return 1 / result;
  } else {
    return result;
  }
};

const helper = (x: number, n: number): number => {
  if (n === 0) return 1;
  return x * helper(x, n - 1);
};

// console.log(bruteForceSolution(x, n));

const optimisedSolution = (x: number, n: number) => {
  let ans = 1;
  let absN = Math.abs(n);

  while (absN > 0) {
    if (absN % 2 === 1) {
      ans = ans * x;
      absN = absN - 1;
    }
    x = x * x;
    absN = Math.floor(absN / 2);
  }
  if (n < 0) return 1.0 / ans;
  return ans;
};

console.log(optimisedSolution(x, n));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
