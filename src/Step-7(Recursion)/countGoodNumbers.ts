// 1922. Count Good Numbers
// Medium
//
// A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
//
// For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime.
// However, "3245" is not good because 3 is at an even index but is not even.
//
// Given an integer n, return the total number of good digit strings of length n.
// Since the answer may be large, return it modulo 109 + 7.
//
// A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
//
// Example 1:
//
// Input: n = 1
// Output: 5
// Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
//
// Example 2:
//
// Input: n = 4
// Output: 400
//
// Example 3:
//
// Input: n = 50
// Output: 564908303

export {};

const n = 5;

const bruteForceSolution = (n: number) => {
  let ans = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      ans = ans * 5;
    } else {
      ans = ans * 4;
    }
    ans = ans % (10 ** 9 + 7);
  }
  return ans;
};

console.log(bruteForceSolution(n));

const MOD = BigInt(10 ** 9 + 7);

const optimisedSolution = (n: number) => {
  let digits = BigInt(n);

  let oddCount = digits / BigInt(2);
  let evenCount = digits / BigInt(2) + (digits % BigInt(2));

  let first = calculatePower(5n, evenCount) % MOD;
  let second = calculatePower(4n, oddCount) % MOD;

  let result = (first * second) % MOD;

  return Number(result);
};

const calculatePower = (_x: BigInt, _n: BigInt) => {
  let value = BigInt(1);
  let x = BigInt(_x);
  let n = BigInt(_n);

  while (n > 0n) {
    if (n % 2n === 1n) {
      value = (value * x) % BigInt(MOD);
      n = n - 1n;
    }
    x = (x * x) % BigInt(MOD);
    n = n / 2n;
  }

  return value % MOD;
};

console.log(optimisedSolution(n));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
