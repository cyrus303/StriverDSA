/*

Pattern-5: Inverted Right Pyramid


32

2
Problem Statement: Given an integer N, print the following pattern : 


Here, N = 5.

Examples:

Input Format: N = 3
Result: 
* * *
* * 
*

Input Format: N = 6
Result:
* * * * * *
* * * * * 
* * * * 
* * * 
* * 
* 
*/

export {};

const pattern = (N: number) => {
  for (let i = N; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += " * ";
    }
    console.log(line);
  }
};

pattern(6);
