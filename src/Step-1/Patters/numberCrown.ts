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
12       321
1234    4321
12345  54321
123456654321
*/

export { };
const pattern = (N: number) => {
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += i;
    }
    console.log(line);
  }
};
pattern(6);
