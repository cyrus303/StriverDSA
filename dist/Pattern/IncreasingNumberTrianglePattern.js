/*
Pattern – 13: Increasing Number Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1
2 3
4 5 6

Input Format: N = 6
Result:
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
*/

const pattern = (n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    line = '';
    for (let j = 0; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
};

pattern(5);
