// Add 1 to a Linked List Number
// Difficulty: Medium
// You are given a linked list where each element in the list is a node and have an integer data.
// You need to add 1 to the number formed by concatinating all the list node numbers together and
// return the head of the modified linked list.
//
// Note: The head represents the first element of the given array.
//
// Examples :
//
// Input: LinkedList: 4->5->6
// Output: 457
//
// Explanation: 4->5->6 represents 456 and when 1 is added it becomes 457.
//
// Input: LinkedList: 1->2->3
// Output: 124
//
// Explanation:  1->2->3 represents 123 and when 1 is added it becomes 124.
//
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

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
    const arr = [];
    let temp = head;

    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }

    // let num = Number(arr.join("")) + 1;
    // const updatedArr = num
    //   .toString()
    //   .split("")
    //   .map((ele) => Number(ele));
    // console.log(updatedArr);

    let num = BigInt(arr.join("")) + BigInt(1);
    const updatedArr = num
      .toString()
      .split("")
      .map((ele) => Number(ele));

    let dummyNode = new Node(-1);
    let current = dummyNode;

    for (let i = 0; i < updatedArr.length; i++) {
      let newNode = new Node(updatedArr[i]);
      current.next = newNode;
      current = current.next;
    }

    return dummyNode.next;
  }

  optimisedSolution(head: Node | null) {
    head = reverseList(head);

    let temp = head;
    let carry = 1;

    while (temp !== null) {
      if (carry === 0) break;
      let sum = temp.value + carry;
      temp.value = sum % 10;
      carry = Math.floor(sum / 10);

      temp = temp.next;
    }

    head = reverseList(head);

    if (carry > 0) {
      let newNode = new Node(carry);
      newNode.next = head;
      head = newNode;
    }

    return head;
  }

  optimalSolution(head: Node | null) {
    let carry = helper(head);

    if (carry === 1) {
      let newNode = new Node(1);
      newNode.next = head;
      return newNode;
    }
    return head;
  }
}

const helper = (temp: Node | null): number => {
  if (temp === null) return 1;

  let carry = helper(temp.next);
  let sum = temp.value + carry;
  if (sum < 10) {
    temp.value = sum;
    return 0;
  } else {
    temp.value = sum % 10;
    carry = sum / 10;
    return carry;
  }
};

const reverseList = (head: Node | null) => {
  let temp = head;
  let prev = null;

  while (temp !== null) {
    let frontNodes = temp.next;
    temp.next = prev;
    prev = temp;
    temp = frontNodes;
  }

  return prev;
};

const head = new Node(1);
const second = new Node(9);
const third = new Node(9);
const fourth = new Node(9);
const fifth = new Node(9);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

const solution = new Solution();
// console.log(solution.bruteForceSolution(head));
// console.log(solution.optimisedSolution(head));
console.log(solution.optimalSolution(head));
