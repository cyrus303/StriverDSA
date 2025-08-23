// 232. Implement Queue using Stacks
// Easy
//
// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
//
// Implement the MyQueue class:
//
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
//
// You must use only standard operations of a stack, which means only push to top,
// peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively.
// You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
//
// Example 1:
//
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
//
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

export {};

class Queue {
  S1: number[];
  S2: number[];

  constructor() {
    this.S1 = [];
    this.S2 = [];
  }

  push(ele: number) {
    while (this.S1.length !== 0) {
      const val = this.S1.pop();
      if (val !== undefined) this.S2.push(val);
    }
    this.S1.push(ele);

    while (this.S2.length !== 0) {
      const val = this.S2.pop();
      if (val !== undefined) this.S1.push(val);
    }
  }

  pop() {
    return this.S1.pop();
  }

  top() {
    return this.S1.at(-1);
  }

  empty() {
    return this.S1.length === 0;
  }

  display() {
    return this.S1;
  }
}

const Q1 = new Queue();
Q1.push(1);
Q1.push(2);
Q1.push(3);
console.log(Q1.display());

Q1.pop();

console.log(Q1.display());
