/*
Pattern – 7: Star Pyramid
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
  *
 ***
*****

Input Format: N = 6
Result:
     *
    ***
   *****
  *******
 *********
***********

*/

const pattern = (n) => {
  for (i = 0; i < n; i++) {
    let line = '';
    for (j = 0; j < n - i - 1; j++) {
      line += '-';
    }
    for (j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }
    for (j = 0; j < n - i - 1; j++) {
      line += '-';
    }
    console.log(line);
  }
};

pattern(3);
