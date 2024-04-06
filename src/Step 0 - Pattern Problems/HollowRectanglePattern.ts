/*
Pattern – 21: Hollow Rectangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
***
* *
***

Input Format: N = 6
Result:
******
*    *
*    *
*    *
*    *
******
*/

export {};

const pattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    if (i === 0 || i === n - 1) {
      line = '*'.repeat(n);
    } else {
      for (let j = 0; j < n; j++) {
        if (j >= 1 && j <= n - 2) {
          line += ' ';
        } else {
          line += '*';
        }
      }
    }

    console.log(line);
  }
};

pattern(10);
