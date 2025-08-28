// Prefix to Infix Conversion
// You are given a valid arithmetic expression in prefix notation.
// Your task is to convert it into a fully parenthesized infix expression.
//
// Prefix notation (also known as Polish notation) places the operator before its operands.
// In contrast, infix notation places the operator between operands.
//
// Your goal is to convert the prefix expression into a valid fully parenthesized infix expression.
//
// Examples:
// Input: expression = "+ab"
//
// Output: "(a+b)"
//
// Input: expression = "*+ab-cd"
//
// Output: "((a+b)*(c-d))"

export {};

const operators = new Set(["+", "-", "*", "/", "^"]);

const prefixToInfix = (inputStr: string) => {
  let stack: string[] = [];

  for (let i = inputStr.length - 1; i >= 0; i--) {
    let char = input[i];

    if (operators.has(char)) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let temp = "(" + op1 + char + op2 + ")";
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }
  return stack.pop();
};

const input = "*+ab-cd";
console.log(prefixToInfix(input));
