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
    let temp = head;
    let arr = [];

    while (temp !== null && temp.next !== null) {
      arr.push(temp.value);
      temp = temp.next.next;
    }
    arr.push(temp.value);

    temp = head.next;
    while (temp !== null && temp.next !== null) {
      arr.push(temp.value);
      temp = temp.next.next;
    }

    temp = head;
    let i = 0;
    while (temp !== null) {
      temp.value = arr[i];
      i++;
      temp = temp.next;
    }

    // temp = head;
    // let i = 0;
    // let j = 1;
    // while (temp !== null) {
    //   if (i < arr.length) {
    //     temp.value = arr[i];
    //     i = i + 2;
    //   } else {
    //     temp.value = arr[j];
    //     j = j + 2;
    //   }
    //   temp = temp.next;
    // }
    return head;
  }

  optimisedSolution(head: Node | null) {
    let odd = new Node(-1);
    let even = new Node(-1);

    let curr = head;
    let nodeIndex = 1;
    while (curr !== null) {}
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
