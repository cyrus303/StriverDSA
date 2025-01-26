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
  const n = inputStr.length;

  const stack = [];
  const ans = [];

  for (let i = 0; i < n; i++) {
    let element = inputStr[i];
    if (element === "(") {
      if (stack.length === 0) {
        stack.push(element);
      } else {
        stack.push(element);
        ans.push(element);
      }
    } else if (element === ")") {
      stack.pop();
      if (stack.length !== 0) {
        ans.push(element);
      }
    }
  }

  return ans.join("");
};

console.log(bruteForceSolution(inputStr));

const optimisedSolution = (str: string) => {
  const n = str.length;
  const ans = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    const element = str[i];

    if (element === "(") {
      if (count > 0) ans.push(element);
      count++;
    } else if (element === ")") {
      count--;
      if (count > 0) ans.push(element);
    }
  }

  return ans.join("");
};

console.log(optimisedSolution(inputStr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
