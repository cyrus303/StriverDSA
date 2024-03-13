/*
Pattern – 20: Symmetric-Butterfly Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
*    *
**  **
******
**  **
*    *


Input Format: N = 6
Result:
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *

*/

export {};

const pattern = (n: number) => {
  let initialSpace = 2 * n - 2;
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    for (let j = 0; j < initialSpace; j++) {
      line += ' ';
    }
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    initialSpace -= 2;
    console.log(line);
  }

  let secondSpace = 0;
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = n - i; j > 0; j--) {
      line += '*';
    }
    for (let j = 0; j < secondSpace; j++) {
      line += ' ';
    }
    for (let j = n - i; j > 0; j--) {
      line += '*';
    }
    console.log(line);
    secondSpace += 2;
  }
};
pattern(5);
