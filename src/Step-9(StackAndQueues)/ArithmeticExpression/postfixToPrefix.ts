export {};

const operators = new Set(["+", "-", "*", "/", "^"]);

const postfixToPrefix = (inputStr: string) => {
  let stack: string[] = [];

  for (let i = 0; i <= inputStr.length - 1; i++) {
    let char = inputStr[i];

    if (operators.has(char)) {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let temp = char + op2 + op1;
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }

  return stack.pop();
};

const input = "AB+CD-*";
console.log(postfixToPrefix(input));
