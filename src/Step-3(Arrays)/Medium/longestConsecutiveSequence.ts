// 128. Longest Consecutive Sequence
// Medium
//
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//
// You must write an algorithm that runs in O(n) time.
//
//
//
// Example 1:
//
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
//
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

export {};

const numbers = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const bruteForceSolution = (arr: number[]) => {
  let longest = 1;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let count = 1;

    while (linearSearch(arr, element + 1) === true) {
      element++;
      count++;
    }

    longest = Math.max(count, longest);
  }

  return longest;
};

const linearSearch = (arr: number[], element: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
};

console.log(bruteForceSolution(numbers));

// const optimisedSolution = (arr: number[]) => {};

// console.log(optimisedSolution(arr1));

const optimalSolution = (arr: number[]) => {
  const HASHMAP = new Set(arr);
  let longest = 1;

  for (let i = 0; i < arr.length; i++) {
    if (!HASHMAP.has(arr[i] - 1)) {
      let length = 0;

      while (HASHMAP.has(arr[i] + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};

console.log(optimalSolution(numbers));
