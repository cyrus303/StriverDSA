// Check if a number is Armstrong Number or not
//
// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
//
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
//
// Examples
// Example 1:
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153
// Example 2:
// Input:N = 371
// Output: True
// Explanation: 33+53+13 = 27 + 343 + 1 = 371

export {};

const armstrong = (N: number) => {
  console.log("Input Number is: ", N);
  const len = N.toString().length;

  let value = 0;

  for (let i = 0; i < len; i++) {}
};

armstrong(153);
