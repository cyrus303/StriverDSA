/*
Inverted Star Pyramid
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
*****
 ***
  *
Input Format: N = 6
Result:
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
    for (let j = n; j > n - i; j--) {
      line += '-';
    }
    for (let j = 2 * n - 1 - 2 * i; j > 0; j--) {
      line += '*';
    }
    for (let j = n; j > n - i; j--) {
      line += '-';
    }
    console.log(line);
  }
};

pattern(6);
