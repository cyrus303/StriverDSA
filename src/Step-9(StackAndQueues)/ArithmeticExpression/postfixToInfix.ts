export {};

const operators = new Set(["+", "-", "*", "/", "^"]);

const postfixToInfix = (inputStr: string) => {
  let stack: string[] = [];

  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    if (operators.has(char)) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let temp = "(" + op2 + char + op1 + ")";
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }
  return stack.pop();
};

const input = "ab*cd+e-/";
console.log(postfixToInfix(input));
