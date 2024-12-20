/*
Pattern - 6: Inverted Numbered Right Pyramid

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

Input Format: N = 3
Result: 
1 2 3
1 2
1

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1

*/

export { };

const pattern = (N: number) => {
  for (let i = N; i > 0; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += j.toString();
    }
    console.log(line);
  }
};

pattern(6);
