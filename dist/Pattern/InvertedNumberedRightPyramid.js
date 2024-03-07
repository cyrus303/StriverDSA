/*
Pattern – 6: Inverted Numbered Right Pyramid
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1 2 3
1 2
1

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

const pattern = (n) => {
  for (let i = n; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    console.log(line);
  }
};

// pattern(5);

const optimised = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log([...Array(i)].map((_, j) => j + 1).join(''));
  }
};

optimised(8);
