/*

Pattern-2: Right-Angled Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

*
**
***
****
*****

*/

const pattern = (n) => {
  for (let i = 0; i <= n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
};

pattern(5);

const optimised = (n) => {
  for (let i = 0; i <= n; i++) {
    let line = '';
    line += '*'.repeat(i + 1);
    console.log(line);
  }
};

optimised(7);
