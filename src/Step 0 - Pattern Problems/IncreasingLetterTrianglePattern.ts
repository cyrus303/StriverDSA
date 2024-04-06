/*
Pattern-14: Increasing Letter Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
A
A B
A B C

Input Format: N = 6
Result:
A
A B
A B C
A B C D
A B C D E
A B C D E F
*/
export {};

const pattern = (n: number) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(65 + j) + ' ';
    }
    console.log(line);
  }
};

pattern(26);

console.log('\n', 'A'.charCodeAt(0));
console.log('\n', String.fromCharCode(65));
