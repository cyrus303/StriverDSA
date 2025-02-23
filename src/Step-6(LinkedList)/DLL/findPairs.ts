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
  bruteForceSolution(head: Node | null, target: number) {
    if (head === null || head.next === null) return null;
    let temp1 = head;
    let temp2 = head.next;
    let ans = [];

    while (temp1 !== null) {
      temp2 = temp1.next;
      while (temp2 !== null) {
        let sum = temp1.value + temp2.value;
        if (sum === target) {
          ans.push([temp1.value, temp2.value]);
        }
        temp2 = temp2.next;
      }
      temp1 = temp1.next;
    }
    return ans;
  }

  optimisedSolution(head: Node | null, target: number) {
    if (head === null || head.next === null) return [];
    let left = head;
    const ans = [];

    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    let right = temp;

    while (left.value < right.value) {
      const sum = left.value + right.value;
      if (sum < target) {
        left = left.next;
      } else if (sum > target) {
        right = right.prev;
      } else {
        ans.push([left.value, right.value]);
        left = left.next;
        right = right.prev;
      }
    }

    return ans;
  }
}

// Creating nodes for the doubly linked list
const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
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

const target = 5;
printNodes(head);
const solution = new Solution();
console.log(solution.bruteForceSolution(head, target));
console.log(solution.optimisedSolution(head, target));
