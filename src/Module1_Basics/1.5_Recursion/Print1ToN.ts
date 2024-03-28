/*
Print 1 to N using Recursion

Problem: Print from 1 to N using Recursion
*/

export {};

const solution = (n: number) => {
  if (n < 1) return;
  solution(n - 1);
  console.log(n);
};

solution(10);
