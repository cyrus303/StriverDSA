// 2095. Delete the Middle Node of a Linked List
// Medium
//
// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
//
// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing,
// where ⌊x⌋ denotes the largest integer less than or equal to x.
//
// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
//
// Example 1:
//
// Input: head = [1,3,4,7,1,2,6]
// Output: [1,3,4,1,2,6]
// Explanation:
// The above figure represents the given linked list. The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
//
// Example 2:
//
// Input: head = [1,2,3,4]
// Output: [1,2,4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
//
// Example 3:
//
// Input: head = [2,1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
// Node 0 with value 2 is the only node remaining after removing node 1.

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
    if (head === null || head.next === null) return null;

    let slow: Node | null = head;
    let fast: Node | null = head;

    let dummyNode = new Node(-1);
    dummyNode.next = slow;

    while (slow !== null && fast !== null && fast.next !== null) {
      fast = fast.next.next;
      dummyNode = slow;
      slow = slow.next;
    }

    //@ts-expect-error
    dummyNode.next = slow.next;
    return head;
  }

  optimisedSolution(head: Node | null) {
    if (head === null || head.next === null) return null;

    let slow: Node | null = head;
    let fast: Node | null = head;
    fast = fast.next.next;

    while (slow !== null && fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    //@ts-expect-error
    slow.next = slow.next.next;
    return head;
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
fifth.next = null;

const solution = new Solution();
console.log(solution.bruteForceSolution(head));
// console.log(solution.optimisedSolution(head));
