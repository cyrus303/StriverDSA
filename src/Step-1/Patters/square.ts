/* Pattern-1: Rectangular Star Pattern

Problem Statement: Given an integer N, print the following pattern.

Examples:

Example 1:

Input: N = 3
Output: 
* * *
* * *
* * *


Example 2:

Input: N = 6
Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *

*/
export {};

const RectangularStar = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 0; j < n; j++) {
      line += " * ";
    }
    console.log(line);
  }
};

RectangularStar(5);
RectangularStar(8);
