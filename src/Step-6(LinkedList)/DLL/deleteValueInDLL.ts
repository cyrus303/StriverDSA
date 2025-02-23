//
// Delete all occurrences of a given key in a doubly linked list
// Difficulty: Medium
// You are given the head_ref of a doubly Linked List and a Key.
// Your task is to delete all occurrences of the given key if it is present and return the new DLL.
//
// Example1:
//
// Input:
// 2<->2<->10<->8<->4<->2<->5<->2
// 2
//
// Output:
// 10<->8<->4<->5
//
// Explanation:
// All Occurences of 2 have been deleted.
//
// Example2:
//
// Input:
// 9<->1<->3<->4<->5<->1<->8<->4
// 9
//
// Output:
// 1<->3<->4<->5<->1<->8<->4
//
// Explanation:
// All Occurences of 9 have been deleted.

export {};

class Node {
  prev: Node | null;
  value: any;
  next: Node | null;

  constructor(value: any) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

const printNodes = (head: Node) => {
  let current: Node | null = head;
  const result: [number | null, number, number | null][] = [];

  while (current) {
    result.push([
      current.prev ? current.prev.value : null,
      current.value,
      current.next ? current.next.value : null,
    ]);
    current = current.next;
  }

  console.log(result);
};

class Solution {
  bruteForceSolution(head: Node | null, key: number) {
    if (head === null) return head;
    if (head.next === null && head.value === key) return null;

    let arr = [];
    let temp: Node | null = head;

    while (temp !== null) {
      arr.push(temp.value);
      temp = temp.next;
    }

    arr = arr.filter((ele) => ele !== key);

    const newHead = new Node(arr[0]);
    temp = newHead;
    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i]);
      temp.next = newNode;
      newNode.prev = temp;

      temp = temp.next;
    }
    return newHead;
  }

  optimisedSolution(head: Node | null, key: number) {
    if (head === null) return head;
    if (head.next === null && head.value === key) return null;

    let current = head;
    let newHead = head;

    while (current !== null) {
      let prevNode = current.prev;
      let nextNode = current.next;

      if (current.value === key) {
        if (prevNode) {
          prevNode.next = nextNode;
        } else {
          newHead = nextNode;
          nextNode.prev = null;
          current.next = null;
        }
        if (nextNode) {
          nextNode.prev = prevNode;
        }
      }

      current = current.next;
    }
    return newHead;
  }
}

// Creating nodes for the doubly linked list
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(2);
const fifth = new Node(5);

// Linking nodes to form a doubly linked list
head.next = second;
second.prev = head;
second.next = third;
third.prev = second;
third.next = fourth;
fourth.prev = third;
fourth.next = fifth;
fifth.prev = fourth;

const key = 2;

printNodes(head);
const solution = new Solution();
// console.log(solution.bruteForceSolution(head, key));
console.log(solution.optimisedSolution(head, key));
