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
  const st = [];
  let ans = "";

  let i = 0;

  while (i < inputStr.length) {
    if (
      (inputStr[i] >= "A" && inputStr[i] <= "Z") ||
      (inputStr[i] >= "a" && inputStr[i] <= "z") ||
      (inputStr[i] >= "0" && inputStr[i] <= "9")
    ) {
      ans = ans + inputStr[i];
    } else if (inputStr[i] === "(") {
      st.push(inputStr[i]);
    } else if (inputStr[i] === ")") {
      while (st.length !== 0 && st.at(-1) !== "(") {
        ans = ans + st.pop();
      }
      st.pop();
    } else {
      while (
        st.length !== 0 &&
        priority(inputStr[i]) <= priority(st[st.length - 1])
      ) {
        ans = ans + st.pop();
      }
      st.push(inputStr[i]);
    }
    i++;
  }

  while (st.length !== 0) {
    ans = ans + st.pop();
  }

  return ans;
};

const input = "(p+q)*(m-n)";
console.log(bruteForce(input));
