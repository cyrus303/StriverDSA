/*

Pattern-2: Right-Angled Triangle Pattern

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

Input Format: N = 3
Result: 
* 
* * 
* * *

Input Format: N = 6
Result:
* 
* * 
* * *
* * * *
* * * * *
* * * * * *

*/

export {};

const Pattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line = line + " * ";
    }
    console.log(line);
  }
};

Pattern(6);
Pattern(10);
