/*
Check if a number is Armstrong Number or not
Problem Statement: Given a number, check if it is Armstrong Number or Not.

Example 1:
Input:153
Output: Yes, it is an Armstrong Number
Explanation: 1^3 + 5^3 + 3^3 = 153

Input:170
Output: No, it is not an Armstrong Number
Explanation: 1^3 + 7^3 + 0^3 != 170

What are Armstrong Numbers?

Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number.
Examples- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

*/

export {};

const solution = (n: number) => {
  let number = n;
  let value = 0;

  const length = number.toString().length;

  for (let i = 0; i < length; i++) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    value += Math.pow(digit, 3);
  }
  console.log(
    n === value ? 'Armstrong Number' : 'Not A Armstrong Number'
  );
};

solution(1);
solution(153);
solution(407);
solution(550);
