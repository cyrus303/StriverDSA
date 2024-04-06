/*
Count digits in a number
Problem Statement: Given an integer N, write a program to count the number of digits in N.

Input:
n = 12345

Output:
5
*/

export {};

const solution = (n: number) => {
  console.log(n.toString().length);
};

solution(1231742);

const solution2 = (n: number) => {
  console.log(Math.floor(Math.log10(n)) + 1);
};

solution2(1223);
