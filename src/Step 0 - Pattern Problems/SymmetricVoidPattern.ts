/*
Pattern-19: Symmetric-Void Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
******
**  **
*    *
*    *
**  **
******

Input Format: N = 6
Result:
************
*****  *****
****    ****
***      ***
**        **
*          *
*          *
**        **
***      ***
****    ****
*****  *****
************

*/
export {};

const pattern = (n: number) => {
  let initialSpace = 0;
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j < n - i; j++) {
      line += '*';
    }
    for (let j = 0; j < initialSpace; j++) {
      line += ' ';
    }
    for (let j = 0; j < n - i; j++) {
      line += '*';
    }
    console.log(line);
    initialSpace += 2;
  }

  let SecondSpace = 2 * n - 2;
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    for (let j = 0; j < SecondSpace; j++) {
      line += ' ';
    }
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    console.log(line);
    SecondSpace -= 2;
  }
};

pattern(8);
