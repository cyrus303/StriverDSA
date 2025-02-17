// 2. Add Two Numbers
// Medium
//
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
//
// Example 2:
//
// Input: l1 = [0], l2 = [0]
// Output: [0]
//
// Example 3:
//
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
//
// Constraints:
//
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

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
    const arr1 = [];
    const arr2 = [];

    let temp1 = list1;
    let temp2 = list2;

    while (temp1 !== null) {
      arr1.push(temp1.value);
      temp1 = temp1.next;
    }

    while (temp2 !== null) {
      arr2.push(temp2.value);
      temp2 = temp2.next;
    }

    let num1 = BigInt(arr1.reverse().join(""));
    let num2 = BigInt(arr2.reverse().join(""));

    let result = (num1 + num2)
      .toString()
      .split("")
      .map((ele) => Number(ele))
      .reverse();

    const dummyList = new Node(-1);
    let temp = dummyList;

    for (let i = 0; i < result.length; i++) {
      const newNode = new Node(result[i]);
      temp.next = newNode;
      temp = temp.next;
    }

    return dummyList.next;
  }

  optimisedSolution(list1: Node | null, list2: Node | null) {}
}

const list1 = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

list1.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

const list2 = new Node(6);
const two = new Node(8);
const three = new Node(3);
const four = new Node(7);
const five = new Node(1);

list2.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = null;

const solution = new Solution();
console.log(solution.bruteForceSolution(list1, list2));
// console.log(solution.optimisedSolution(head));
