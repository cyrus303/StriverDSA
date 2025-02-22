// 21. Merge Two Sorted Lists
// Easy
//
// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.
//
// Example 1:
//
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//
// Example 2:
//
// Input: list1 = [], list2 = []
// Output: []
//
// Example 3:
//
// Input: list1 = [], list2 = [0]
// Output: [0]

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
  bruteForceSolution(list1: Node | null, list2: Node | null) {
    if (list1 === null && list2 === null) return null;
    else if (list1 === null) return list2;
    else if (list2 === null) return list1;

    const arr = [];
    let temp1 = list1;
    let temp2 = list2;

    while (temp1 !== null) {
      arr.push(temp1.value);
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      arr.push(temp2.value);
      temp2 = temp2.next;
    }

    arr.sort((a, b) => a - b);

    let sortedList = new Node(arr[0]);
    let temp = sortedList;
    for (let i = 1; i < arr.length; i++) {
      let node = new Node(arr[i]);
      temp.next = node;
      temp = temp.next;
    }

    return sortedList;
  }

  optimisedSolution(list1: Node | null, list2: Node | null) {
    let dummy = new Node(Infinity);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
      if (list1.value <= list2.value) {
        current.next = new Node(list1.value);
        list1 = list1.next;
      } else {
        current.next = new Node(list2.value);
        list2 = list2.next;
      }
      current = current.next;
    }

    while (list1 !== null) {
      current.next = new Node(list1.value);
      current = current.next;
      list1 = list1.next;
    }

    while (list2 !== null) {
      current.next = new Node(list2.value);
      current = current.next;
      list2 = list2.next;
    }

    return dummy.next;
  }
}

// First sorted linked list: 1 -> 3 -> 4 -> 7 -> 8
const list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(4);
list1.next.next.next = new Node(7);
list1.next.next.next.next = new Node(8);

// Second sorted linked list: 2 -> 5 -> 6 -> 9 -> 10
const list2 = new Node(2);
list2.next = new Node(5);
list2.next.next = new Node(6);
list2.next.next.next = new Node(9);
list2.next.next.next.next = new Node(10);

const solution = new Solution();
console.log(solution.bruteForceSolution(list1, list2));
console.log(solution.optimisedSolution(list1, list2));
