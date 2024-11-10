/*
 Pattern - 9: Diamond Star Pattern

Problem Statement: Given an integer N, print the following pattern : 

Here, N = 5.

Examples:

Input Format: N = 3
Result: 
  *  
 ***
***** 
*****  
 ***
  *   

Input Format: N = 6
Result:   
     *
    ***
   ***** 
  *******
 *********
***********  
***********
 *********
  *******
   ***** 
    ***    
     *
*/
export { };

const pattern = (N: number) => {
  // Top half of the diamond
  for (let i = 0; i < N; i++) {
    let line = "";

    // Spaces before stars
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }

    // Stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }

  // Bottom half of the diamond
  for (let i = N - 1; i >= 0; i--) {
    let line = "";

    // Spaces before stars
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }

    // Stars
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }

    console.log(line);
  }
};

pattern(6);
