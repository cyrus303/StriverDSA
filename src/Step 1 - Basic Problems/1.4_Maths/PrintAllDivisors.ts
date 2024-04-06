/*
Print all Divisors of a given Number
Problem Statement: Given a number, print all the divisors of the number.
A divisor is a number that gives the remainder as zero when divided.

Example 1:
Input: n = 36
Output: 1 2 3 4 6 9 12 18 36
Explanation: All the divisors of 36 are printed.

Example 2:
Input: n = 97
Output: 1 97
Explanation: Since 97 is a prime number, only 1 and 97 are printed.
*/

const solution = (n: number) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
};

// solution(97);

const solution2 = (n: number) => {
  console.log(Math.sqrt(n));
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (parseInt(String(n / i), 10) === i) {
        console.log(i);
      } else {
        console.log(i + ' ' + parseInt(String(n / i), 10) + ' ');
      }
    }
  }
};

solution2(20);
