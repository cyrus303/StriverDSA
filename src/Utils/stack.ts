export default class Stack {
  items: (string | number)[];
  constructor() {
    this.items = [];
  }

  push(ele: number | string): void {
    this.items.push(ele);
  }

  pop(): string | number | undefined {
    const ele = this.items.pop();
    return ele;
  }

  isEmpty() {
    const length = this.items.length;
    return length === 0;
  }

  display() {
    console.log(this.items);
  }
}
