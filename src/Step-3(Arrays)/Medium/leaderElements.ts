// Leaders in an Array
//
// Problem Statement: Given an array, print all the elements which are leaders.
// A Leader is an element that is greater than all of the elements on its right side in the array.
//
// Examples
// Example 1:
// Input:
//
//  arr = [4, 7, 1, 0]
// Output
// :
//  7 1 0
// Explanation:
//
//  Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.
//
// Example 2:
// Input:
//
//  arr = [10, 22, 12, 3, 0, 6]
// Output:
//
//  22 12 6
// Explanation:
//
//  6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6),
//  also 22 is greater than 12, 3, 0, 6.

export {};

const numbers = [4, 7, 1, 0];

const bruteForceSolution = (arr: number[]) => {
  let len = arr.length;
  let results = [];
  for (let i = 0; i < len; i++) {
    let isLeader = true;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < arr[j]) {
        isLeader = false;
      }
    }
    if (isLeader) {
      results.push(arr[i]);
    }
  }
  return results;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  const n = arr.length;
  let ans = [];
  let max = arr[n - 1];
  ans.push(arr[n - 1]);

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      ans.push(arr[i]);
    }
  }

  return ans;
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
