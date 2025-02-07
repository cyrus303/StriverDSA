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

    // let i = 0;
    // let j = arr.length - 1;
    //
    // while (i <= j) {
    //   if (arr[i] !== arr[j]) {
    //     return false;
    //   }
    //   i++;
    //   j--;
    // }

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

    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let i = head;
    let j = slow;

    return slow?.value;
  }
}

// with a loop for testing
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(2);
const fifth = new Node(1);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

const solution = new Solution();
console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
