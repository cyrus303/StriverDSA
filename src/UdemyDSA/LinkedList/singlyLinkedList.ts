export {};

class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push("hi");
list.push("hello");
list.push(90);

let current = list.head;
while (current) {
  console.log({
    value: current.value,
    next: current.next ? current.next.value : null,
  });
  current = current.next;
}
