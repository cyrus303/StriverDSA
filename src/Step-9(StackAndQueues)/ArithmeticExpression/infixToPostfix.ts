// Problem Statement: Given an infix expression, Your task is to convert the given infix expression to a postfix expression.
//
// Examples:
//
// Example 1:
// Input: a+b*(c^d-e)^(f+g*h)-i
// Output: abcd^e-fgh*+^*+i-
// Explanation: Infix to postfix
//
// Example 2:
// Input: (p+q)*(m-n)
// Output: pq+mn-*
// Explanation: Infix to postfix

export {};

const priority = (char: string) => {
  if (char === "^") return 3;
  else if (char === "*" || char === "/") return 2;
  else if (char === "+" || char === "-") return 1;
  else return -1;
};

const bruteForce = (inputStr: string) => {
  const stack = [];
  let ans = "";

  for (const ch of inputStr) {
    if (/[A-Za-z0-9]/.test(ch)) {
      ans += ch;
    } else if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      while (stack.length !== 0 && stack.at(-1) !== "(") {
        ans += stack.pop();
      }
      stack.pop();
    } else {
      while (stack.length !== 0 && priority(ch) <= priority(stack.at(-1)!)) {
        ans += stack.pop();
      }
      stack.push(ch);
    }
  }

  while (stack.length !== 0) {
    ans += stack.pop();
  }

  return ans;
};

const input = "(p+q)*m";
console.log("infix to postfix", bruteForce(input));
