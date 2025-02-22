export {};

class Node {
  prev: Node | null;
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

const printNodes = (head: Node) => {
  let current: Node | null = head;
  const result: [number | null, number, number | null][] = [];

  while (current) {
    result.push([
      current.prev ? current.prev.value : null,
      current.value,
      current.next ? current.next.value : null,
    ]);
    current = current.next;
  }

  console.log(result);
};

class Solution {
  bruteForceSolution(head: Node | null) {
    const arr = [];
    let temp = head;

    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }

    temp = head;

    while (temp !== null) {
      temp.value = arr.pop();
      temp = temp.next;
    }
    return head;
  }

  optimisedSolution(head: Node | null) {
    let temp = head;
    let prevNode = null;

    while (temp !== null) {
      let frontNodes = temp.next;
      temp.next = prevNode;
      temp.prev = frontNodes;
      prevNode = temp;
      temp = frontNodes;
    }
    return prevNode;
  }
}

// Creating nodes for the doubly linked list
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

// Linking nodes to form a doubly linked list
head.next = second;
second.prev = head;
second.next = third;
third.prev = second;
third.next = fourth;
fourth.prev = third;
fourth.next = fifth;
fifth.prev = fourth;

printNodes(head);
const solution = new Solution();
// console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
