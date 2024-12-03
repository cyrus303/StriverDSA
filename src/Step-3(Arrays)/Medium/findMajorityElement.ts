// Find the Majority Element that occurs more than N/2 times
//
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.
//
// Examples
// Example 1:
// Input Format
// : N = 3, nums[] = {3,2,3}
// Result
// : 3
// Explanation
// : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution.
//
// Example 2:
// Input Format:
//   N = 7, nums[] = {2,2,1,1,1,2,2}
//
// Result
// : 2
//
// Explanation
// : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.
//
// Example 3:
// Input Format:
//   N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
//
// Result
// : 4

export {};

const numbers = [6, 5, 5];

//NOTE: 2 for loops
const bruteForceSolution = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    const currEle = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (currEle === arr[j]) {
        count++;
      }
    }
    if (count > Math.floor(arr.length / 2)) {
      return arr[i];
    }
  }
};

console.log(bruteForceSolution(numbers));

//NOTE: Hashmap
const optimisedSolution = (arr: number[]) => {
  const HashOne: Record<string, number> = {};
  const HashTwo = new Map();
  const len = arr.length;

  arr.forEach((element: number) => {
    HashOne[element] = (HashOne[element] | 0) + 1;
  });

  arr.forEach((element) => {
    HashTwo.set(element, (HashTwo.get(element) | 0) + 1);
  });

  console.log("HashOne ->", HashOne);
  console.log("HashTwo ->", HashTwo);

  for (let [key, value] of Object.entries(HashOne)) {
    if (value > Math.floor(len / 2)) {
      // return key;
      console.log("Key ->", key);
    }
  }

  for (let [key, value] of HashTwo) {
    if (value > Math.floor(len / 2)) {
      // return key;
      console.log("Key ->", key);
    }
  }
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
