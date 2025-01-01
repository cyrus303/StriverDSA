// Floor in a Sorted Array
// Difficulty: EasyAccuracy: 33.75%Submissions: 395K+Points: 2
// Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the
// largest element in arr[] that is less than or equal to k. This element is called the "floor" of k.
// If such an element does not exist, return -1.
//
// Examples
//
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 0
// Output: -1
// Explanation: No element less than 0 is found. So output is -1.
// Input: arr[] = [1, 2, 8, 10, 11, 12, 19], k = 5
// Output: 1
// Explanation: Largest Number less than 5 is 2 , whose index is 1.
// Input: arr[] = [1, 2, 8], k = 1
// Output: 0
// Explanation: Largest Number less than or equal to  1 is 1 , whose index is 0.
export {};

const findFloor = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let floorValue = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] <= target) {
      floorValue = arr[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return floorValue;
};

const findCeil = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let ceilValue = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      ceilValue = arr[mid];
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ceilValue;
};

const optimisedSolution = (arr: number[], target: number) => {
  const floor = findFloor(arr, target);
  const ceil = findCeil(arr, target);
  return [floor, ceil];
};

const arr = [3, 4, 4, 7, 8, 10];
const target = 5;
console.log(optimisedSolution(arr, target));
