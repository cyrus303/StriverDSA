/*
Pattern – 12: Number Crown Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1    1
12  21
123321

Input Format: N = 6
Result:
1          1
12        21
123      321
1234    4321
12345  54321
123456654321
*/

const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    let line2 = line.split('').reverse().join('');
    let space = '';

    for (let j = 2 * n - 2 * i; j > 0; j--) {
      space += ' ';
    }

    console.log(line + space + line2);
  }
};

pattern(9);

const optimized = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    let line2 = line.split('').reverse().join('');

    console.log(line + line2.padStart(n * 2 - i, ' '));
  }
};

optimized(3);
