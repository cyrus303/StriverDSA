// 225. Implement Stack using Queues
// Easy
// Implement a last-in-first-out (LIFO) stack using only two queues.
// The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
//
// Implement the MyStack class:
//
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:
//
// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
//
//
// Example 1:
//
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]
//
// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

export {};

class Stack {
  Q1: number[];
  Q2: number[];

  constructor() {
    this.Q1 = [];
    this.Q2 = [];
  }

  push(ele: number) {
    while (this.Q1.length !== 0) {
      const val = this.Q1.pop();
      if (val !== undefined) {
        this.Q2.push(val);
      }
    }

    this.Q1.push(ele);

    while (this.Q2.length !== 0) {
      const val = this.Q2.pop();
      if (val !== undefined) {
        this.Q1.push(val);
      }
    }
  }

  pop() {
    while (this.Q1.length !== 0) {
      const val = this.Q1.pop();
      if (val !== undefined) {
        this.Q2.push(val);
      }
    }

    const val = this.Q2.pop();

    while (this.Q2.length !== 0) {
      const val = this.Q2.pop();
      if (val !== undefined) {
        this.Q1.push(val);
      }
    }

    return val;
  }

  top() {
    return this.Q1.at(0);
  }

  empty() {
    return this.Q1.length === 0;
  }
}
