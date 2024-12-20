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

  pop() {
    if (!this.head) {
      console.log("list is empty");
      return undefined;
    }
    let current = this.head;
    let prev = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  unshift(value: any) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (!this.head) return undefined;
    else if (index < 0 || index >= this.length) return "Invalid index";

    let current = this.head;
    let counter = 0;

    while (counter !== index && current.next) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

const list = new SinglyLinkedList();

list.push(10);
list.push("hi");
list.push("hello");

const printElements = () => {
  let current = list.head;
  while (current) {
    console.log({
      value: current.value,
      next: current.next ? current.next.value : null,
    });
    current = current.next;
  }
};

console.log(list.unshift(99));

printElements();
console.log(list.get(2));
