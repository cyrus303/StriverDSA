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

  optimisedSolution(list1: Node | null, list2: Node | null) {
    let result = new Node(-1);
    let current = result;

    let carry = 0;

    while (list1 !== null && list2 !== null) {
      let sum = carry;

      if (list1 !== null) {
        sum = sum + list1.value;
        list1 = list1.next;
      }

      if (list2 !== null) {
        sum = sum + list2.value;
        list2 = list2.next;
      }

      let value = sum % 10;
      carry = Math.floor(sum / 10);

      current.next = new Node(value);
      current = current.next;
    }

    if (carry === 1) current.next = new Node(carry);

    return result.next;
  }

  addition(list1: Node | null, list2: Node | null) {
    let temp1 = list1;
    let temp2 = list2;

    let dummy = new Node(-1);
    let current = dummy;
    let carry = 0;

    while (temp1 !== null || temp2 !== null || carry) {
      const value1 = temp1?.value || 0;
      const value2 = temp2?.value || 0;

      const sum = value1 + value2 + carry;
      carry = Math.floor(sum / 10);

      current.next = new Node(sum % 10);
      current = current.next;

      temp1 = temp1?.next || null;
      temp2 = temp2?.next || null;
    }

    return dummy.next;
  }
}

function printLinkedList(head: Node | null) {
  if (!head) return "Empty list";
  let output = [];
  let current = head;
  while (current) {
    output.push(current.value);
    //@ts-ignore
    current = current.next;
  }
  console.log(output.join(" → "));
}

const list1 = new Node(9);
const second = new Node(9);
const third = new Node(9);
const fourth = new Node(9);
const fifth = new Node(9);

list1.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

const list2 = new Node(9);
const two = new Node(9);
const three = new Node(9);
// const four = new Node(9);
// const five = new Node(9);

list2.next = two;
two.next = three;
three.next = null;
// four.next = five;
// five.next = null;

const solution = new Solution();
// console.log(solution.bruteForceSolution(list1, list2));
console.log(solution.optimisedSolution(list1, list2));
