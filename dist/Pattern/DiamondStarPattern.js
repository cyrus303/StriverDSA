/*
Pattern – 9: Diamond Star Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
  *
 ***
*****
*****
 ***
  *
Input Format: N = 6
Result:
     *
    ***
   *****
  *******
 *********
***********
***********
 *********
  *******
   *****
    ***
     *
*/

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }
    for (let j = 0; j < n - i - 1; j++) {
      line += ' ';
    }
    console.log(line);
  }
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = n; j > n - i; j--) {
      line += ' ';
    }
    for (let j = 2 * n - 1 - 2 * i; j > 0; j--) {
      line += '*';
    }
    for (let j = n; j > n - i; j--) {
      line += ' ';
    }

    console.log(line);
  }
};

pattern(5);
