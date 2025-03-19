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
}

// Example usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

const bruteForce = (stack: Stack) => {
  let tempStack = new Stack();

  while (!stack.isEmpty()) {
    let temp = stack.pop();

    while (!tempStack.isEmpty() && tempStack.top() < temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
};

console.log("before");

// Print the sorted stack
while (!stack.isEmpty()) {
  console.log(stack.pop());
}

bruteForce(stack);

console.log("after");

// Print the sorted stack
while (!stack.isEmpty()) {
  console.log(stack.pop());
}
