export {};

class Node {
  prev: Node | null;
  value: any;
  next: Node | null;

  constructor(value?: any) {
    this.prev = null;
    this.value = value || -1;
    this.next = null;
  }
}

class DoublyLinkedList {
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
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop(): Node | null | undefined {
    if (this.length === 0) return undefined;
    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;

      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift(): Node | null | undefined {
    if (this.length === 0) return undefined;
    let removedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;

      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(value: any) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index <= Math.floor(this.length / 2)) {
      let counter = 0;
      let temp = this.head;
      while (temp !== null) {
        if (counter === index) return temp;
        temp = temp.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      let temp = this.tail;

      while (temp !== null) {
        if (counter === index) return temp;
        temp = temp.prev;
        counter--;
      }
    }
  }
}

const DLL = new DoublyLinkedList();

DLL.push(1);
DLL.push(2);
DLL.push(3);
console.log(DLL.get(2)?.value);
