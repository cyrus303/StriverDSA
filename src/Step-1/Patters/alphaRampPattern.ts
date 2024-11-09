//Pattern - 16: Alpha-Ramp Pattern
//
//Problem Statement: Given an integer N, print the following pattern :
//
//Here, N = 5.
//
//Examples:
//
//Input Format: N = 3
//Result:
//A
//B B
//C C C
//
//Input Format: N = 6
//Result:
//A
//B B
//C C C
//D D D D
//E E E E E
//F F F F F F

export { };

const pattern = (N: number) => {
  const Char = 65;
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(Char + i);
    }
    console.log(line);
  }
};

pattern(6);
