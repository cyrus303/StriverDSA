//Pattern - 17: Alpha-Hill Pattern
//
//Problem Statement: Given an integer N, print the following pattern :
//
//Here, N = 4.
//
//Examples:
//
//Input Format: N = 3
//Result:
//  A
// ABA
//ABCBA
//
//
//Input Format: N = 6
//Result:
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
//ABCDEFEDCBA

export {};

function pattern(N: number) {
  // Outer loop for the number of rows.
  for (let i = 0; i < N; i++) {
    let line = "";

    // Adding spaces before the characters.
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }

    // Adding the characters.
    let ch = "A";
    let breakpoint = Math.floor((2 * i + 1) / 2);
    for (let j = 1; j <= 2 * i + 1; j++) {
      line += ch;
      if (j <= breakpoint)
        ch = String.fromCharCode(ch.charCodeAt(0) + 1); // Increment character
      else ch = String.fromCharCode(ch.charCodeAt(0) - 1); // Decrement character
    }

    // Adding spaces after the characters (optional, to match C++ logic).
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }

    // Print the line for the current row.
    console.log(line);
  }
}

pattern(6);
