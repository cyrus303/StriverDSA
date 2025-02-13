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

  optimisedSolution(head: Node | null): Node | null {
    if (head === null || head.next === null) return head;

    let middle = findMiddle(head);

    let end = middle.next;
    let start: Node | null = head;
    middle.next = null;

    start = this.optimisedSolution(start);
    end = this.optimisedSolution(end);

    return mergeTwoSortedLL(start, end);
  }
}

const findMiddle = (head: Node | null): Node | null => {
  if (head === null || head.next === null) return head;
  let slow: Node | null = head;
  let fast: Node | null = head.next;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const mergeTwoSortedLL = (
  list1: Node | null,
  list2: Node | null,
): Node | null => {
  let dummyNode = new Node(Infinity);
  let current = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummyNode.next;
};

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
// console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
