// Print all Divisors of a given Number
//
// Problem Statement: Given an integer N, return all divisors of N.
//
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
//
// Examples
//
// Example 1:
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
//
// Example 2:
// Input:N =12
// Output: [1, 2, 3, 4, 6, 12]
// Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.

export {};

const findingDivisors = (N: number) => {
  console.log("Input value is: ", N);
  const div: number[] = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      div.push(i);
    }
  }
  console.log(div);
};

findingDivisors(36);
findingDivisors(12);

function findDivisors(n: number) {
  let divisors = [];

  let sqrtN = Math.sqrt(n);

  for (let i = 1; i <= sqrtN; ++i) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }

  return divisors;
}

let number = 12;
let divisors = findDivisors(number);

console.log("Divisors of " + number + " are: ");
for (let divisor of divisors) {
  console.log(divisor + " ");
}
console.log();