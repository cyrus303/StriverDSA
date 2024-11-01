/*
Pattern - 7: Star Pyramid


84

3
Problem Statement: Given an integer N, print the following pattern : 


Here, N = 5.

Examples:

Input Format: N = 3
Result: 
  *  
 *** 
*****   
Input Format: N = 6
Result:
     *     
    ***    
   *****   
  *******  
 ********* 
***********
*/

export { };

const pattern = (N: number) => {
  for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      line += "*";
    }
    for (let j = 0; j < N - i - 1; j++) {
      line += " ";
    }
    console.log(line);
  }
};

pattern(6);
