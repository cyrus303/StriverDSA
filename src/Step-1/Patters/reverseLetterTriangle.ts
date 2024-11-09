//Pattern-15: Reverse Letter Triangle Pattern
//
//Problem Statement: Given an integer N, print the following pattern :
//
//Here, N = 5.
//
//Examples:
//
//Input Format: N = 3
//Result:
//A B C
//A B
//A
//
//Input Format: N = 6
//Result:
//A B C D E F
//A B C D E
//A B C D
//A B C
//A B
//A

export { };

function pattern(N: number) {
  const Char = 65;
  for (let i = N; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(Char + j);
    }
    console.log(line);
  }
}

pattern(6);
console.log("------------------------------");
const pattern2 = (N: number) => {
  const Char = 65;
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = N; j >= i; j--) {
      line += String.fromCharCode(Char + N - j);
    }
    console.log(line);
  }
};

pattern2(5);
