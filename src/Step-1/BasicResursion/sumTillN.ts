// Sum of first N Natural Numbers
//
// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.
//
// Examples:
//
// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15
//
// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=15

export {};

const CalculateSum = (N: number): number => {
  if (N === 0) {
    return 0;
  }
  return N + CalculateSum(N - 1);
};

console.log(CalculateSum(5));
