// 155. Min Stack
// Medium
//
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// Implement the MinStack class:
//
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.
//
//
// Example 1:
//
// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]
//
// Output
// [null,null,null,null,-3,null,0,-2]
//
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

class minStack {
  stack: [number, number][];

  constructor() {
    this.stack = [];
  }

  push(ele: number) {
    let min = Infinity;
    if (this.stack.length === 0) {
      min = ele;
    } else {
      min = Math.min(ele, this.getMin()!);
    }
    this.stack.push([ele, min]);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack.at(-1)![0];
  }

  getMin() {
    return this.stack.at(-1)![1];
  }
}

const st = new minStack();

st.push(-2);
st.push(0);
st.push(-3);

console.log(st.getMin());

st.pop();
console.log(st.top());
console.log(st.getMin());

class optimisedMinStack {
  stack: number[];
  min: number;

  constructor() {
    this.stack = [];
    this.min = Infinity;
  }

  push(val: number) {
    if (this.stack.length === 0) {
      this.min = val;
      this.stack.push(val);
      return;
    }
    if (val >= this.min) {
      this.stack.push(val);
    } else {
      this.stack.push(2 * val - this.min);
      this.min = val;
    }
  }

  pop() {
    if (this.stack.length === 0) return;
    const poppedEl = this.stack.pop();
    if (poppedEl < this.min) {
      const val = 2 * this.min - poppedEl;
      this.min = val;
    }
  }

  top() {
    if (this.stack.length === 0) return undefined;
    const top = this.stack[this.stack.length - 1];
    if (top < this.min) {
      return this.min;
    }
    return top;
  }

  getMin() {
    return this.min;
  }
}

const op = new optimisedMinStack();

op.push(-2);
op.push(0);
op.push(-3);

console.log(op.getMin());

op.pop();
console.log(op.top());
console.log(op.getMin());
