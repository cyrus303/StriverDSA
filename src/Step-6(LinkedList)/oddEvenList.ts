// 328. Odd Even Linked List
// Medium
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices,
// and return the reordered list.
//
// The first node is considered odd, and the second node is even, and so on.
//
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
//
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.
//
// Example 1:
//
// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
//
// Example 2:
//
// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

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
    let temp: Node | null = head;
    let arr = [];

    while (temp !== null) {
      arr.push(temp.value);
      if (temp.next === null) break;
      temp = temp.next.next;
    }

    temp = head.next;
    while (temp !== null) {
      arr.push(temp.value);
      if (temp.next === null) break;
      temp = temp.next.next;
    }

    temp = head;
    let i = 0;
    while (temp !== null) {
      temp.value = arr[i];
      i++;
      temp = temp.next;
    }

    return head;
  }

  optimisedSolution(head: Node | null) {
    if (head === null) return head;

    let odd = head;

    let even = head.next;
    let evenHead = even;

    while (even !== null && even.next !== null) {
      odd.next = odd.next.next;
      odd = odd.next;

      even.next = even.next.next;
      even = even.next;
    }

    odd.next = evenHead;

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
// console.log(solution.bruteForceSolution(head));
console.log(solution.optimisedSolution(head));
