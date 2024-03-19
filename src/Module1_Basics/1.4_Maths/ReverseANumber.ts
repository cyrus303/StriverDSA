/*
Problem Statement: Given a number N reverse the number and print it.

Example 1:
Input: N = 123
Output: 321
Explanation: The reverse of 123 is 321

Example 2:
Input: N = 234
Output: 432
Explanation: The reverse of 234 is 432
*/
export {};

const solution = (n: number): void => {
  console.log(Number(n.toString().split('').reverse().join('')));
  console.log(+n.toString().split('').reverse().join(''));
};

solution(12345);

const solution2 = (n: number): void => {
  const length = n.toString().length;
  let number = n;
  let reverseNumber = [];
  for (let i = 1; i <= length; i++) {
    let digit = number % 10;
    reverseNumber.push(digit);
    number = Math.floor(number / 10);
  }
  console.log(reverseNumber.join(''));
};

solution2(121233);
