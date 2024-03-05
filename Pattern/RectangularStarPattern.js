/*
Pattern-1: Rectangular Star Pattern
Problem Statement: Given an integer N, print the following pattern.

*****



*****
*****
*****
*****

*/

const pattern = (n) => {
  for (let i = 0; i <= n; i++) {
    let line = '';
    for (let j = 0; j <= n; j++) {
      line += '*';
    }
    console.log(line);
  }
};

pattern(5);

const OptimisedPattern = (n) => {
  for (let i = 0; i <= n; i++) {
    let line = '';
    line += '*'.repeat(n + 1);
    console.log(line);
  }
};

OptimisedPattern(7);
