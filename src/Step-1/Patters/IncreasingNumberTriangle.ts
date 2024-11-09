//Pattern - 13: Increasing Number Triangle Pattern
//
//Problem Statement: Given an integer N, print the following pattern :
//
//Here, N = 5.
//
//Examples:
//
//Input Format: N = 3
//Result:
//1
//2 3
//4 5 6
//
//Input Format: N = 6
//Result:
//1
//2  3
//4  5  6
//7  8  9  10
//11  12  13  14  15
//16  17  18  19  20  21

export { };

const pattern = (N: number) => {
  let count = 1;
  for (let i = 1; i <= N; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += count++ + " ";
    }
    console.log(line);
  }
};

pattern(6);
