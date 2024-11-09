//Pattern - 14: Increasing Letter Triangle Pattern
//
//Problem Statement: Given an integer N, print the following pattern:
//
//
//Here, N = 5.
//
//Examples:
//
//Input Format: N = 3
//Result:
//A
//A B
//A B C
//
//Input Format: N = 6
//Result:
//A
//A B
//A B C
//A B C D
//A B C D E
//A B C D E F

export { };

const pattern = (N: number) => {
  const initialChar = 65;
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(initialChar + j);
    }
    console.log(line);
  }
};

pattern(6);
