// 206. Reverse Linked List
// Easy
//
// Given the head of a singly linked list, reverse the list, and return the reversed list.
//
// Example 1:
//
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
//
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
//
// Input: head = []
// Output: []

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
      const ele = stack.pop();
      if (ele !== undefined) {
        temp.value = ele;
      }
      temp = temp.next;
    }

    return head;
  }

  //Itarative Approach
  optimisedSolution(head: Node | null) {
    let temp = head;
    let prev = null;

    while (temp !== null) {
      let frontNode = temp.next;
      temp.next = prev;
      prev = temp;
      temp = frontNode;
    }
    return prev;
  }

  //recursive Approach
  optimalSolution(head: Node | null): Node | null {
    if (head === null || head.next === null) {
      return head;
    }

    const newHead = this.optimalSolution(head.next);
    const frontNode = head.next;
    frontNode.next = head;
    head.next = null;

    return newHead;
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
console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
console.log(solution.optimalSolution(head));
