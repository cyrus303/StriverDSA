/*
Pattern – 11: Binary Number Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1
01
101

Input Format: N = 6
Result:
1
01
101
0101
10101
010101
*/

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < i + 1; j++) {
      line += j % 2 === 0 ? '1' : '0';
    }
    console.log(line.split('').reverse().join(''));
  }
};

pattern(6);
