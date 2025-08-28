// Problem Statement: Given an infix expression, Your task is to convert the given infix expression to a prefix expression.
//
// Examples:
//
// Example 1:
// Input: x+y*z/w+u
// Output: ++x/*yzwu
// Explanation: Infix to prefix
//
// Example 2:
// Input: a+b
// Output: +ab
// Explanation: Infix to prefix

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

const infixToPrefix = (inputStr: string) => {
  // Step 1: Reverse input string
  let reversed = inputStr.split("").reverse().join("");

  // Step 2: Swap '(' and ')'
  reversed = reversed
    .replace(/\(/g, "#")
    .replace(/\)/g, "(")
    .replace(/#/g, ")");

  // Step 3: Use existing infix to postfix on reversed string
  const postfix = bruteForce(reversed);

  // Step 4: Reverse the postfix result to get prefix
  return postfix.split("").reverse().join("");
};

const input = "(p+q)*(m-n)";
console.log("infix to prefix", infixToPrefix(input)); // Expected output: *+pq-mn
