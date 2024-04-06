/*
Pattern – 13: Increasing Number Triangle Pattern
Problem Statement: Given an integer N, print the following pattern :

Input Format: N = 3
Result:
1
2 3
4 5 6

Input Format: N = 6
Result:
1
2  3
4  5  6
7  8  9  10
11  12  13  14  15
16  17  18  19  20  21
*/
export {};
console.time();
// const pattern = (n: number) => {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     const line = Array.from({length: i + 1}, () => count++);
//     console.log(line.join(' '));
//   }
// };

const pattern = (n: number) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += `${count++} `;
    }
    console.log(line);
  }
};

pattern(10);

console.timeEnd();
