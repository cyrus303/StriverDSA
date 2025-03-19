// Reverse a Stack
// Difficulty: Medium
// You are given a stack St. You have to reverse the stack using recursion.
//
// Example 1:
//
// Input:
// St = {3,2,1,7,6}
// Output:
// {6,7,1,2,3}
// Explanation:
// Input stack after reversing will look like the stack in the output.
// Example 2:
//
// Input:
// St = {4,3,9,6}
// Output:
// {6,9,3,4}
// Explanation:
// Input stack after reversing will look like the stack in the output.
// Your Task:
//
// You don't need to read input or print anything. Your task is to complete the function Reverse() which takes the stack St as input and reverses the given stack.
//
// Expected Time Complexity: O(N2)
// Expected Auxiliary Space: O(1)

const input = [1, 2, 3, 4, 5];

const insertAtLast = (stack: number[], tempValue: number | undefined) => {
  if (stack.length === 0) {
    stack.push(tempValue);
    return;
  }

  let topEle = stack.pop();
  insertAtLast(stack, tempValue);

  stack.push(topEle);
};

const reverseStack = (stack: number[]) => {
  if (stack.length === 0) {
    return;
  }

  let temp = stack.pop();
  reverseStack(stack);

  insertAtLast(stack, temp);
};

const bruteForce = (stack: number[]) => {
  console.log("input ->", stack);
  reverseStack(stack);
  console.log("output ->", stack);
};

bruteForce(input);
