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
    if (this.stack.length !== 0) this.stack.pop();
  }

  top() {
    if (this.stack.length === 0) {
      return undefined;
    } else {
      return this.stack.at(-1)![0];
    }
  }

  getMin() {
    if (this.stack.length === 0) {
      return undefined;
    } else {
      return this.stack.at(-1)![1];
    }
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
