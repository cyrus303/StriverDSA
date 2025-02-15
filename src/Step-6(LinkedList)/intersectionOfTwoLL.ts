// 160. Intersection of Two Linked Lists
// Easy
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.
//
// For example, the following two linked lists begin to intersect at node c1:
//
//
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
//
// Note that the linked lists must retain their original structure after the function returns.
//
// Custom Judge:
//
// The inputs to the judge are given as follows (your program is not given these inputs):
//
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads,
// headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
//
// Example 1:
//
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A;
// There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references.
// In other words, they point to two different locations in memory,
// while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
//
// Example 2:
//
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
//
// Example 3:
//
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

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
  bruteForceSolution(headA: Node | null, headB: Node | null) {
    let temp = headA;
    const HASH = new Map();
    while (temp !== null) {
      HASH.set(temp, true);
      temp = temp.next;
    }

    temp = headB;
    while (temp !== null) {
      if (HASH.has(temp)) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  optimalSolution(headA: Node | null, headB: Node | null) {
    let lengthA = 0;
    let lengthB = 0;

    let temp = headA;
    while (temp !== null) {
      lengthA++;
      temp = temp.next;
    }

    temp = headB;
    while (temp !== null) {
      lengthB++;
      temp = temp.next;
    }

    let offset = Math.abs(lengthA - lengthB);

    let dummyA = headA;
    let dummyB = headB;

    if (lengthA > lengthB) {
      while (offset > 0) {
        dummyA = dummyA.next;
        offset--;
      }
    } else {
      while (offset > 0) {
        dummyB = dummyB.next;
        offset--;
      }
    }

    while (dummyA !== dummyB && dummyA !== null && dummyB !== null) {
      dummyA = dummyA.next;
      dummyB = dummyB.next;
    }

    return dummyA;
  }

  optimisedSolution(headA: Node | null, headB: Node | null) {
    let temp1 = headA;
    let temp2 = headB;

    while (temp1 !== temp2) {
      if (temp1 === null) {
        temp1 = headB;
      } else {
        temp1 = temp1.next;
      }

      if (temp2 === null) {
        temp2 = headA;
      } else {
        temp2 = temp2.next;
      }
    }

    return temp1;
  }
}

// ListA: [3,7,8,10,1,2,6,9,12,4,5]
const headA = new Node(3);
const secondA = new Node(7);
const thirdA = new Node(8);
const fourthA = new Node(10);
const fifthA = new Node(1);
const sixthA = new Node(2);
const seventhA = new Node(6);
const eighthA = new Node(9);
const ninthA = new Node(12);
const tenthA = new Node(4);
const eleventhA = new Node(5);

headA.next = secondA;
secondA.next = thirdA;
thirdA.next = fourthA;
fourthA.next = fifthA;
fifthA.next = sixthA;
sixthA.next = seventhA;
seventhA.next = eighthA;
eighthA.next = ninthA;
ninthA.next = tenthA;
tenthA.next = eleventhA;
eleventhA.next = null;

// ListB: [5,6,4,1,8,11,2,6,9,12,4,5]
const headB = new Node(5);
const secondB = new Node(6);
const thirdB = new Node(4);
const fourthB = new Node(1);
const fifthB = new Node(8);
const sixthB = new Node(11);

headB.next = secondB;
secondB.next = thirdB;
thirdB.next = fourthB;
fourthB.next = fifthB;
fifthB.next = sixthB;
sixthB.next = sixthA; // Intersection point

const solution = new Solution();
// console.log(solution.bruteForceSolution(headA, headB));
console.log(solution.optimalSolution(headA, headB));
// console.log(solution.optimisedSolution(head));
