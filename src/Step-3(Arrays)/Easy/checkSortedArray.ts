// Check if an Array is Sorted
//
// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
//
// Note: Two consecutive equal values are considered to be sorted.
//
// Examples
// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output
// : True.
// Explanation:
//  The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.
//
//
// Example 2:
// Input:
//  N = 5, array[] = {5,4,6,7,8}
// Output
// : False.
// Explanation:
//  The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.
//
// Here element 5 is not smaller than or equal to its future elements.

export {};

const checkArray = (inputArr: number[]) => {
  console.log("Input Array ->", inputArr);

  for (let i = 1; i < inputArr.length; i++) {
    if (inputArr[i - 1] > inputArr[i]) {
      return false;
    }
  }
  return true;
};

const arr = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 6, 7, 8];

console.log(checkArray(arr));
console.log(checkArray(arr2));
