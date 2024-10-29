/*
Pattern - 3: Right-Angled Number Pyramid

Problem Statement: Given an integer N, print the following pattern : 
Here, N = 5.

Examples:

Input Format: N = 3
Result: 
1
1 2 
1 2 3

Input Format: N = 6
Result:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
*/

export {};

const pattern = (N: number) => {
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 1; j <= i + 1; j++) {
      line = line + j.toString();
    }
    console.log(line);
  }
};

pattern(6);
