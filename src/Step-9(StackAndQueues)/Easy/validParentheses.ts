// 20. Valid Parentheses
//
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
// Example 1:
//
// Input: s = "()"
// Output: true
//
// Example 2:
//
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
//
// Input: s = "(]"
// Output: false
//
// Example 4:
//
// Input: s = "([])"
// Output: true
//
// Example 5:
//
// Input: s = "([)]"
// Output: false

export {};

const bruteForce = (inputStr: string) => {
  const stack: string[] = [];

  for (const ele of inputStr) {
    if (ele === "(" || ele === "{" || ele === "[") {
      stack.push(ele);
    } else if (ele === ")" && stack.at(-1) === "(") {
      stack.pop();
    } else if (ele === "}" && stack.at(-1) === "{") {
      stack.pop();
    } else if (ele === "]" && stack.at(-1) === "[") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

const optimised = (inputStr: string) => {
  const stack = [];
  const bracketMap = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (const char of inputStr) {
    if (!bracketMap.has(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== bracketMap.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(optimised("]"));
