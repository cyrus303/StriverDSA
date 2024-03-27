/*
Check if a number is Palindrome or Not
Problem Statement:  Given a number check if it is a palindrome.

An integer is considered a palindrome when it reads the same backward as forward.

Example 1:
Input: N = 123
Output: Not Palindrome Number
Explanation: 123 read backwards is 321.Since these are two different numbers 123 is not a palindrome.

Example 2:
Input: N =  121
Output: Palindrome Number
Explanation: 121 read backwards as 121.Since these are two same numbers 121 is a palindrome.
*/

export {};

const solution = (n: number) => {
  const arr = n.toString().split('');
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    if (arr[i] === arr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};

const result = solution(1112111);
console.log(result ? 'Palindrome Number' : 'Not A Palindrome Number');
