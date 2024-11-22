// Find Second Smallest and Second Largest Element in an array
//
// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
//
// Examples
// Example 1:
// Input:
//  [1,2,4,7,7,5]
// Output:
//  Second Smallest : 2
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2
//
// Example 2:
// Input:
//  [1]
// Output:
//  Second Smallest : -1
// 	Second Largest : -1
// Explanation:
//  Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

export {};

const inputArray = [1, 2, 3, 7, 7, 5];

const bruteForceSolution = (arr: number[]) => {
  console.log("Input Array ->", arr);

  //remove duplicates
  const uniqueArr = [...new Set(arr.sort((a, b) => a - b))];

  return {
    secondLargest: uniqueArr[uniqueArr.length - 2] || -1,
    secondSmallest: uniqueArr[1] || -1,
  };
};

console.log(bruteForceSolution(inputArray));

const optimisedSolution = (arr: number[]) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
    if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }
  return {
    smallest,
    secondSmallest,
    largest,
    secondLargest,
  };
};

console.log(optimisedSolution(inputArray));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
