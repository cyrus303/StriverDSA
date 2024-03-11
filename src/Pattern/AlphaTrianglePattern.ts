/*
Pattern-18: Alpha-Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
C
B C
A B C

Input Format: N = 6
Result:
F
E F
D E F
C D E F
B C D E F
A B C D E F
*/
export {};

const pattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    let ch = 65 + n - 1;
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(ch--).split('').reverse() + ' ';
    }
    console.log(line.split('').reverse().join(''));
  }
};

pattern(10);
