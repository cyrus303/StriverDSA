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

import { calculatePerformace } from "../../Utils/performace";

export {};

const armstrong = (N: number) => {
  console.log("Input Number is: ", N);
  let inputNumber = N;
  const len = inputNumber.toString().length;
  let value = 0;

  for (let i = 0; i < len; i++) {
    let num = inputNumber % 10;
    inputNumber = Math.floor(inputNumber / 10);
    value += num ** len;
  }
  if (value === N) {
    console.log(true);
    return;
  }
  console.log(false);
};

calculatePerformace(() => armstrong(153));
calculatePerformace(() => armstrong(153));
calculatePerformace(() => armstrong(123123212312312));
