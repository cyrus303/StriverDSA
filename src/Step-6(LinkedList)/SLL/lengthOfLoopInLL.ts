// Find length of Loop
// Difficulty: Easy
// Given the head of a linked list, determine whether the list contains a loop.
// If a loop is present, return the number of nodes in the loop, otherwise return 0.
//
// Note: 'c' is the position of the node which is the next pointer of the last node of the linkedlist. If c is 0, then there is no loop.
//
// Examples:
//
// Input: LinkedList: 25->14->19->33->10->21->39->90->58->45, c = 4
// Output: 7
// Explanation: The loop is from 33 to 45. So length of loop is 33->10->21->39-> 90->58->45 = 7.
// The number 33 is connected to the last node of the linkedlist to form the loop because according to the input the
// 4th node from the beginning(1 based indexing)
// will be connected to the last node for the loop.

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
    const HASH = new Map();
    let temp = head;
    let index = 0;

    while (temp !== null) {
      if (HASH.has(temp)) {
        return index - HASH.get(temp);
      } else {
        HASH.set(temp, index);
      }
      temp = temp.next;
      index++;
    }

    return 0;
  }

  optimisedSolution(head: Node | null) {
    let slow = head;
    let fast = head;

    while (slow && fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        let count = 1;
        slow = slow.next;

        while (slow !== fast) {
          slow = slow.next;
          count++;
        }
        return count;
      }
    }
    return 0;
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
