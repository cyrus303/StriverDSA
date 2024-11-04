/*
Pattern - 11: Binary Number Triangle Pattern

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

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
export { };

const pattern = (N: number) => {
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += (j + i + 1) % 2;
    }
    console.log(line);
  }
};

pattern(6);
