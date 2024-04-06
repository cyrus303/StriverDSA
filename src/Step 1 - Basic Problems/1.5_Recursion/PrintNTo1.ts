/*
Print N to 1 using Recursion

Problem: Print from N to 1 using Recursion
*/

export {};

const solution = (n: number) => {
  if (n < 1) return;
  console.log(n);
  solution(n - 1);
};

solution(10);
