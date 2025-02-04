// Search in Linked List
// Difficulty: Easy
// Given a linked list of n nodes and a key,
// the task is to check if the key is present in the linked list or not.
//
// Example:
//
// Input: n = 4, key = 3
// 1->2->3->4
// Output: true
// Explanation: 3 is present in Linked List, so the function returns true.

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
  searchEle(head: Node, target: number): boolean {
    let currentNode: Node | null = head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

const solution = new BruteForceSolution();

console.log(solution.searchEle(head, 3));
