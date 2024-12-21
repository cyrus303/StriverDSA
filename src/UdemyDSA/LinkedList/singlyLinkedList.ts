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
    else if (index < 0 || index >= this.length) return undefined;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      if (!current.next) return undefined;
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: any) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index: number, value: any) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);

    if (prevNode) {
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    if (!prevNode || !prevNode.next) return undefined;

    const removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;

    return removed;
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

printElements();
console.log("\n -- remove");

console.log(list.remove(1));
printElements();
