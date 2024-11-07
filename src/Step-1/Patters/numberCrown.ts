/*
 
Pattern - 12: Number Crown Pattern

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

Input Format: N = 3
Result: 
1    1
12  21
123321

Input Format: N = 6
Result:   
1          1
12        21
123      321
1234    4321
12345  54321
123456654321
*/

export {};

const pattern = (N: number) => {
  let spaces = 2 * (N - 1);

  for (let i = 1; i <= N; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      line += j;
    }
    for (let j = 1; j <= spaces; j++) {
      line += " ";
    }
    for (let j = i; j >= 1; j--) {
      line += j;
    }

    spaces -= 2;
    console.log(line);
  }
};

pattern(6);
