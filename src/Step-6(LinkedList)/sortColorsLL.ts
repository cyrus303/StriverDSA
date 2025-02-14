// Sort a linked list of 0s, 1s and 2s
//
// Difficulty: Medium
//
// Given a linked list where nodes can contain values 0s, 1s, and 2s only.
// The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to the head side,
// 2s at the end of the linked list, and 1s in the middle of 0s and 2s.
//
// Examples:
//
// Input: LinkedList: 1->2->2->1->2->0->2->2
// Output: 0->1->1->2->2->2->2->2
// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.
//
// Input: LinkedList: 2->2->0->1
// Output: 0->1->2->2
// Explanation: After arranging all the 0s,1s and 2s in the given format, the output will be 0 1 2 2.
//
// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

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
    let countZero = 0;
    let countOne = 0;
    let countTwo = 0;

    let temp = head;
    while (temp !== null) {
      if (temp.value === 0) countZero++;
      else if (temp.value === 1) countOne++;
      else if (temp.value === 2) countTwo++;
      temp = temp.next;
    }

    temp = head;
    while (temp !== null) {
      if (countZero > 0) {
        temp.value = 0;
        countZero--;
      } else if (countOne > 0) {
        temp.value = 1;
        countOne--;
      } else {
        temp.value = 2;
        countTwo--;
      }
      temp = temp.next;
    }

    return head;
  }

  optimisedSolution(head: Node | null) {
    if (head === null || head.next === null) return head;

    let zeroHead = new Node(-1);
    let oneHead = new Node(-1);
    let twoHead = new Node(-1);

    let zero = zeroHead;
    let one = oneHead;
    let two = twoHead;

    let temp = head;
    while (temp !== null) {
      const newNode = new Node(temp.value);
      if (temp.value === 0) {
        zero.next = newNode;
        zero = zero.next;
      } else if (temp.value === 1) {
        one.next = newNode;
        one = one.next;
      } else {
        two.next = newNode;
        two = two.next;
      }
      temp = temp.next;
    }

    zero.next = oneHead.next ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
    two.next = null;

    return zeroHead.next;
  }
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(2);
const fourth = new Node(1);
const fifth = new Node(2);
const sixth = new Node(0);
const seventh = new Node(2);
const eighth = new Node(2);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
seventh.next = eighth;
eighth.next = null;

const solution = new Solution();
// console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
