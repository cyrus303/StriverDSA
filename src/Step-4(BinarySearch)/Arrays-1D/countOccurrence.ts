// Count Occurrences in Sorted Array
//
// Problem Statement: You are given a sorted array containing N integers and a number X,
// you have to find the occurrences of X in the given array.
//
// Examples
//
// Example 1:
// Input:
//  N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output
// : 4
// Explanation:
//  3 is occurring 4 times in
// the given array so it is our answer.
//
// Example 2:
// Input:
//  N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
// Output
// : 5
// Explanation:
//  2 is occurring 5 times in the given array so it is our answer.

export {};

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const searchElement = (
  arr: number[],
  target: number,
  findFirst: boolean = true,
): number => {
  let start = 0;
  let end = arr.length - 1;
  let position = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      if (findFirst) {
        position = mid;
        end = mid - 1;
      } else {
        position = mid;
        start = mid + 1;
      }
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return position;
};

const optimisedSolution = (arr: number[], target: number) => {
  const firstPos = searchElement(arr, target);
  const lastPos = searchElement(arr, target, false);

  if (firstPos === -1) return [-1, -1];
  return lastPos - firstPos + 1;
};

const arr = [1, 1, 2, 2, 2, 2, 2, 3];
const target = 1;

console.log(optimisedSolution(arr, target));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
