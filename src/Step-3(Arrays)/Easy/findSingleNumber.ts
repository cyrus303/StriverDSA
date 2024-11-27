// Find the number that appears once, and the other numbers twice
//
// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
//
// Examples
// Example 1:
// Input Format:
//  arr[] = {2,2,1}
// Result:
//  1
// Explanation:
//  In this array, only the element 1 appear once and so it is the answer.
//
// Example 2:
// Input Format:
//  arr[] = {4,1,2,1,2}
// Result:
//  4
// Explanation:
//  In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.

export {};

const numbers = [4, 1, 2, 1, 2, 4, 6, 6, 3];

const bruteForceSolution = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === ele) {
        count++;
      }
    }
    if (count === 1) {
      return ele;
    }
  }
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  const HASH: Record<string, number> = {};

  arr.forEach((ele) => {
    HASH[ele] = (HASH[ele] || 0) + 1;
  });

  for (let [key, value] of Object.entries(HASH)) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(optimisedSolution(numbers));

const optimisedSolutionVersion2 = (arr: number[]) => {
  const HASHMAP = new Map();

  arr.forEach((ele) => {
    HASHMAP.set(ele, (HASHMAP.get(ele) || 0) + 1);
  });

  for (let [key, value] of HASHMAP) {
    if (value === 1) {
      return key;
    }
  }
};

console.log(optimisedSolutionVersion2(numbers));

const optimalSolution = (arr: number[]) => {
  let xorr = 0;

  arr.forEach((ele) => {
    xorr = xorr ^ ele;
  });

  return xorr;
};

console.log(optimalSolution(numbers));
