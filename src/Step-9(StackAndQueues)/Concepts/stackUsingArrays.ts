class Stack {
  items: number[];

  constructor() {
    this.items = [];
  }

  size(): number {
    return this.items.length;
  }

  push(ele: number): void {
    this.items.push(ele);
  }

  pop(): number | undefined {
    if (this.size() === 0) return undefined;
    return this.items.pop();
  }

  top(): number | undefined {
    if (this.size() === 0) return undefined;
    return this.items.at(-1);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
stack.pop();

console.log(stack.top());
console.log(stack.size());
