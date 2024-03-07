/*
Pattern – 4: Right-Angled Number Pyramid – II
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1
2 2
3 3 3

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6
*/

const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += i;
    }
    console.log(line);
  }
};

pattern(5);

const optimised = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    line += i.toString().repeat(i);
    console.log(line);
  }
};

optimised(8);
