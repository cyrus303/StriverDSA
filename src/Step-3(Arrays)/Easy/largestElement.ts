// Find the Largest element in an array
//
// Problem Statement: Given an array, we have to find the largest element in the array.
//
// Examples
// Example 1:
// Input:
//  arr[] = {2,5,1,3,0};
// Output:
//  5
// Explanation:
//  5 is the largest element in the array.
//
// Example2:
// Input:
//  arr[] = {8,10,5,7,9};
// Output:
//  10
// Explanation:
//  10 is the largest element in the array.

export {};

const findLargest = (arr: number[]) => {
  console.log("Input Array ->", arr);
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log("Largest element ->", largest);
};

const inputArr = [2, 5, 1, 3, 0];
findLargest(inputArr);

const arr = [8, 10, 5, 7, 9];
findLargest(arr);
