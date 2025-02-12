// 148. Sort List
// Medium
// Given the head of a linked list, return the list after sorting it in ascending order.
//
// Example 1:
//
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
//
// Example 2:
//
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
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
    if (head === null || head.next === null) return head;

    const arr = [];
    let temp: Node | null = head;

    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }
    arr.sort((a, b) => a - b);

    temp = head;
    let i = 0;
    while (temp !== null) {
      temp.value = arr[i];
      i++;
      temp = temp.next;
    }
    return head;
  }

  optimisedSolution(head: Node | null) {}
}

// with a loop for testing
const head = new Node(5);
const second = new Node(4);
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
// console.log(solution.optimisedSolution(head));
