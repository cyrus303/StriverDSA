/*
Pattern – 16: Alpha-Ramp Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
A
B B
C C C

Input Format: N = 6
Result:
A
B B
C C C
D D D D
E E E E E
F F F F F F
*/

export {};

const pattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65 + i) + ' ';
    }
    console.log(line);
  }
};

pattern(26);
