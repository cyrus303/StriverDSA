// 1614. Maximum Nesting Depth of the Parentheses
// Easy
//
// Given a valid parentheses string s, return the nesting depth of s.
// The nesting depth is the maximum number of nested parentheses.
//
// Example 1:
//
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
//
// Explanation:
//
// Digit 8 is inside of 3 nested parentheses in the string.
//
// Example 2:
//
// Input: s = "(1)+((2))+(((3)))"
// Output: 3
//
// Explanation:
//
// Digit 3 is inside of 3 nested parentheses in the string.
//
// Example 3:
//
// Input: s = "()(())((()()))"
// Output: 3

export {};

const s = "(1+(2*3)+((8)/4))+1";

const bruteForceSolution = (str: string) => {
  const stack = [];
  let depth = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char);
      depth = Math.max(depth, stack.length);
    } else if (char === ")") {
      stack.pop();
    }
  }

  return depth;
};

console.log(bruteForceSolution(s));

// const optimisedSolution = (arr: number[]) => {};
//
// console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
