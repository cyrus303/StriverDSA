// 1021. Remove Outermost Parentheses
// Easy
//
// A valid parentheses string is either empty "", "(" + A + ")", or A + B,
// where A and B are valid parentheses strings, and + represents string concatenation.
//
// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// Example 1:
//
// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:
//
// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:
//
// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

export {};
import Stack from "../../Utils/stack";

const inputStr = "(()())";

const bruteForceSolution = (inputStr: string) => {
  const stack = [];
  const ans = [];

  for (const char of inputStr) {
    if (char === "(") {
      if (stack.length === 0) {
        stack.push(char);
      } else {
        stack.push(char);
        ans.push(char);
      }
    } else if (char === ")") {
      stack.pop();
      if (stack.length !== 0) {
        ans.push(char);
      }
    }
  }

  return ans.join("");
};

console.log(bruteForceSolution(inputStr));

const optimisedSolution = (str: string) => {
  const ans = [];
  let count = 0;

  for (const char of str) {
    if (char === "(") {
      if (count > 0) ans.push(char);
      count++;
    } else if (char === ")") {
      count--;
      if (count > 0) ans.push(char);
    }
  }

  return ans.join("");
};

console.log(optimisedSolution(inputStr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
