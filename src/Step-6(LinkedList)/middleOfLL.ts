// 876. Middle of the Linked List
// Easy
// Topics
// Companies
// Given the head of a singly linked list, return the middle node of the linked list.
//
// If there are two middle nodes, return the second middle node.
//
//
//
// Example 1:
//
//
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
//
//
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

export {};

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Solution {
  bruteForceSolution(head: Node | null) {
    let current = head;
    let length = 0;

    while (current) {
      length++;
      current = current.next;
    }

    let middle = Math.floor(length / 2);
    current = head;

    for (let i = 0; i < middle; i++) {
      current = current.next;
    }

    return current;
  }

  optimisedSolution(head: Node | null) {
    let fast = head;
    let slow = head;

    while (fast && slow && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
}

const values = [1, 2, 3, 4, 5];
const head = new Node(values[0]);
let current = head;

for (let i = 1; i < values.length; i++) {
  const node = new Node(values[i]);
  current.next = node;
  current = node;
}

const solution = new Solution();
console.log(solution.optimisedSolution(head));
console.log(solution.bruteForceSolution(head));
