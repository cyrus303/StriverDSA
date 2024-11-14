// Reverse a given Array
//
// Problem Statement: You are given an array. The task is to reverse the array and print it.
//
// Examples:
//
// Example 1:
// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.
//
// Example 2:
// Input: N=6 arr[] = {10,20,30,40}
// Output: {40,30,20,10}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

export {};

const reverseArray = (num: number[]) => {
  console.log("input array --> ", num);
  const revArr = [];

  for (let i = num.length; i >= 0; i--) {
    console.log(num.length - i);
    revArr[num.length - i] = num[i];
  }
  console.log("reverse array -->", revArr);
  return revArr;
};
const arr = [5, 4, 3, 2, 1];

reverseArray(arr);
