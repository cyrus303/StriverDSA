/*
Pattern-5: Inverted Right Pyramid
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
* * *
* *
*

Input Format: N = 6
Result:
* * * * * *
* * * * *
* * * *
* * *
* *
*

*/

const pattern = (n) => {
  for (let i = n; i > 0; i--) {
    let line = '';
    line += '*'.repeat(i);
    console.log(line);
  }
};

pattern(5);
