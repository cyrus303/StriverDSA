// 141. Linked List Cycle
// Easy
//
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
//
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
//  Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
//
// Return true if there is a cycle in the linked list. Otherwise, return false.
//
//
//
// Example 1:
//
//
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
//
//
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
//
//
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

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
    let temp = head;
    const HASH = new Map();

    while (temp !== null) {
      if (HASH.has(temp)) {
        return true;
      } else {
        HASH.set(temp, true);
      }
      temp = temp.next;
    }
    return false;
  }

  optimisedSolution(head: Node | null) {
    let slow = head;
    let fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) return true;
    }
    return false;
  }
}

// with a loop for testing
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

const solution = new Solution();
console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
