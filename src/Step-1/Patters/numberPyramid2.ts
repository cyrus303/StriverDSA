/*
Pattern - 4: Right-Angled Number Pyramid - II

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

Input Format: N = 3
Result: 
1
2 2 
3 3 3

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
*/
export {};

const pattern = (N: number) => {
  for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i;
    }
    console.log(line);
  }
};

pattern(6);
