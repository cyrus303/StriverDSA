// 19. Remove Nth Node From End of List
// Medium
//
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
//
// Example 1:
//
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
//
// Example 2:
//
// Input: head = [1], n = 1
// Output: []
//
// Example 3:
//
// Input: head = [1,2], n = 1
// Output: [1]

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
  bruteForceSolution(head: Node | null, n: number) {
    if (!head) return null;

    let newHead = reverserList(head);

    let nodeCount = 1;
    let curr = newHead;
    let prev: Node | null = null;

    while (curr !== null) {
      if (nodeCount === n) {
        if (prev === null) {
          newHead = curr.next;
        } else {
          prev.next = curr.next;
        }
        break;
      }

      prev = curr;
      curr = curr.next;
      nodeCount++;
    }

    return reverserList(newHead);
  }

  optimisedSolution(head: Node | null, N: number) {
    if (!head) return null;

    let count = 0;
    let temp: Node | null = head;

    while (temp !== null) {
      count++;
      temp = temp.next;
    }

    if (count === N) {
      let newHead = head.next;
      head = null;
      return newHead;
    }

    let result = count - N;
    temp = head;

    while (temp !== null) {
      result--;
      if (result === 0) break;
      temp = temp.next;
    }

    let delNode = temp.next;
    temp.next = temp.next.next;
    delNode = null;
    return head;
  }

  optimalSolution(head: Node | null, N: number) {
    if (!head) return head;
    let dummyNode = new Node(-1);
    dummyNode.next = head;

    let firstPointer = dummyNode;
    let secondPointer = dummyNode;

    for (let i = 0; i < N; i++) {
      // @ts-ignore
      secondPointer = secondPointer.next;
    }

    while (secondPointer.next !== null) {
      // @ts-ignore
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }

    // @ts-ignore
    firstPointer.next = firstPointer.next.next;

    return dummyNode.next;
  }
}

function reverserList(head: Node | null) {
  let prev = null;
  let temp = head;

  while (temp !== null) {
    let frontNodes = temp.next;
    temp.next = prev;
    prev = temp;
    temp = frontNodes;
  }
  return prev;
}

const printNodes = (head: Node | null) => {
  let temp = head;
  while (temp !== null) {
    console.log(temp.value);
    temp = temp.next;
  }
};

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
console.log(solution.bruteForceSolution(head, 1));
console.log(solution.optimisedSolution(head, 1));
console.log(solution.optimalSolution(head, 1));
