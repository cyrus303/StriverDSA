// 234. Palindrome Linked List
// Easy
//
// Given the head of a singly linked list, return true if it is a
// palindrome
//  or false otherwise.
//
// Example 1:
//
// Input: head = [1,2,2,1]
// Output: true
//
// Example 2:
//
// Input: head = [1,2]
// Output: false

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
    const stack = [];

    while (temp !== null) {
      stack.push(temp.value);
      temp = temp.next;
    }

    temp = head;

    while (temp !== null) {
      if (temp.value !== stack.pop()) {
        return false;
      }
      temp = temp.next;
    }

    return true;
  }

  optimisedSolution(head: Node | null) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const newHead = reverseList(slow);

    let first = head;
    let second = newHead;

    while (second !== null) {
      if (first.val !== second.val) {
        return false;
      }
      first = first.next;
      second = second.next;
    }

    return true;
  }
}

function reverseList(node: Node | null) {
  let temp = node;
  let prev = null;

  while (temp !== null) {
    let frontNode = temp.next;
    temp.next = prev;
    prev = temp;
    temp = frontNode!;
  }
  return prev;
}

// with a loop for testing
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(3);
const fifth = new Node(2);
const sixth = new Node(1);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = null;

const solution = new Solution();
// console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
