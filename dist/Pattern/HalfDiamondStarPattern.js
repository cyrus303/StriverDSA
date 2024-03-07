/*
Half Diamond Star Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
  *
  **
  ***
  **
  *
Input Format: N = 6
Result:
     *
     **
     ***
     ****
     *****
     ******
     *****
     ****
     ***
     **
     *
*/

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < i + 1; j++) {
      line += '*';
    }
    console.log(line);
  }

  for (let i = n - 1; i > 0; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '*';
    }
    console.log(line);
  }
};

pattern(3);
