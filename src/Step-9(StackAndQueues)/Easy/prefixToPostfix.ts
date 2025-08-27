// Prefix to Postfix Conversion
// Difficulty: Medium
// You are given a string that represents the prefix form of a valid mathematical expression. Convert it to its postfix form.
//
// Example:
//
// Input:
// *-A/BC-/AKL
// Output:
// ABC/-AK/L-*
// Explanation:
// The above output is its valid postfix form.
// Your Task:
//
// Complete the function preToPost(string pre_exp), which takes a prefix string as input and returns its postfix form.

export {};

const prefixToPostfix = (inputStr: string) => {
  const stack: string[] = [];
  const operator = new Set(["+", "-", "/", "^", "*"]);

  for (let i = inputStr.length - 1; i >= 0; i--) {
    const char = inputStr[i];

    if (operator.has(char)) {
      const op1 = stack.pop();
      const op2 = stack.pop();

      const temp = `${op1}${op2}${char}`;
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }

  return stack.pop();
};

const input = "*-A/BC-/AKL";
console.log(prefixToPostfix(input));
