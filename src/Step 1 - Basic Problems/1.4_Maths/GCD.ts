/*
Find GCD of two numbers
Problem Statement: Find the gcd of two numbers.

Example 1:
Input: num1 = 4, num2 = 8
Output: 4
Explanation: Since 4 is the greatest number which divides both num1 and num2.

Example 2:
Input: num1 = 3, num2 = 6
Output: 3
Explanation: Since 3 is the greatest number which divides both num1 and num2.
*/

export {};

const solution = (n: number, m: number) => {
  const max = n > m ? n : m;
  let count = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      count = i;
    }
  }
  console.log('GCD:', count);
};

solution(7, 11); // 1
solution(4, 8); // 4
solution(3, 6); // 3
solution(7, 11); // 1
solution(9, 9); // 9
solution(5, 20); // 5
solution(36, 48); // 12
solution(-18, 24); // 6
