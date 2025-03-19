// Sort a stack
// Difficulty: Medium
// Given a stack, the task is to sort it such that the top of the stack has the greatest element.
//
// Example 1:
//
// Input:
// Stack: 3 2 1
// Output: 3 2 1
// Example 2:
//
// Input:
// Stack: 11 2 32 3 41
// Output: 41 32 11 3 2
// Your Task:
// You don't have to read input or print anything.
// Your task is to complete the function sort() which sorts the elements present in the given stack.
// (The sorted stack is printed by the driver's code by popping the elements of the stack.)
//
// Expected Time Complexity: O(N*N)
// Expected Auxilliary Space: O(N) recursive.
//
// Constraints:
// 1<=N<=100

export {};

class Stack {
  stack: number[];

  constructor() {
    this.stack = [];
  }

  push(item: number) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }
}

// Example usage
const input = [30, -5, 18, 14, -3];
let stack = new Stack();

input.forEach((ele) => {
  stack.push(ele);
});

const bruteForce = (stack: Stack) => {
  const tempStack = new Stack();
  let tempValue = null;

  while (stack.size() !== 0) {
    tempValue = stack.pop();

    while (tempStack.size() !== 0 && tempStack.top() < tempValue) {
      stack.push(tempStack.pop());
    }

    tempStack.push(tempValue);
  }

  while (tempStack.size() !== 0) {
    stack.push(tempStack.pop());
  }
};

// Print the sorted stack

bruteForce(stack);

// Print the sorted stack
while (!stack.isEmpty()) {
  console.log(stack.pop());
}
