// Count Linked List Nodes
// Difficulty: Basic
// Given a singly linked list. The task is to find the length of the linked list,
// where length is defined as the number of nodes in the linked list.
//
// Examples :
//
// Input: LinkedList : 1->2->3->4->5
//
// Output: 5
// Explanation: Count of nodes in the linked list is 5, which is its length.
// Input: LinkedList : 2->4->6->7->5->1->0
//
// Output: 7
// Explanation: Count of nodes in the linked list is 7. Hence, the output is 7.

export {};

class Node {
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class BruteForceSolution {
  getCount(head: Node): number {
    let count = 1;

    let node = head;
    while (node.next !== null) {
      count++;
      node = node.next;
    }
    return count;
  }
}

// const head = new Node(4);
// head.next = new Node(5);
// head.next.next = new Node(1);
// head.next.next.next = new Node(9);

const values = [4, 5, 1, 9];
const head = new Node(values[0]);
let current = head;

for (let i = 1; i < values.length; i++) {
  const node = new Node(values[i]);
  current.next = node;
  current = node;
}

const solution = new BruteForceSolution();
console.log(solution.getCount(head));
