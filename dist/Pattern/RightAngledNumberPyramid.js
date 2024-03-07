/*

Pattern – 3: Right-Angled Number Pyramid
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1
1 2
1 2 3

Input Format: N = 6
Result:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6

*/

const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
};

pattern(5);

const optimised = (n) => {
  let line = '';
  for (let i = 1; i <= n; i++) {
    line += i;
    console.log(line);
  }
};

optimised(7);
