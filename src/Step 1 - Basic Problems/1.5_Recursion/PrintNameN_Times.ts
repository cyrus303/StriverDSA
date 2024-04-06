/*
Print Name N times using Recursion

Problem: Print your Name N times using recursion
*/

export {};

const solution = (i: number, n: number): void => {
  if (i > n) return;
  console.log('Sachin');
  solution(i + 1, n);
};

const i: number = 1;
const n: number = 5;
solution(i, n);
