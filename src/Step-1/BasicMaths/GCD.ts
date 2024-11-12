// Find GCD of two numbers
//
// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
//
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.
//
// Examples
// Example 1:
// Input:N1 = 9, N2 = 12
//
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.
// Example 2:
// Input:N1 = 20, N2 = 15
//
// Output: 5
// Explanation:Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.
//
export {};

import { calculatePerformace } from "../../Utils/performace";

const gcdCalculator = (n1: number, n2: number) => {
  console.log("GCD Calculator");

  console.log(`n1: ${n1}, n2: ${n2}`);
  let divisor = 1;
  let i = 1;
  while (i < Math.min(n1, n2)) {
    if (n1 % i === 0 && n2 % i === 0) {
      divisor = i;
    }
    i++;
  }
  console.log("common divisor: ", divisor);
};

const gcdCalculatorOptimsed = (n1: number, n2: number) => {
  console.log("GCD Calculator");
  console.log(`n1: ${n1}, n2: ${n2}`);
  let divisor = 1;
  let i = Math.min(n1, n2);
  while (i > 0) {
    if (n1 % i === 0 && n2 % i === 0) {
      divisor = i;
      console.log("common divisor: ", divisor);
      return;
    }
    i--;
  }
};

calculatePerformace(() => gcdCalculator(2000000000, 1000000000));
calculatePerformace(() => gcdCalculatorOptimsed(2000000000, 1000000000));
