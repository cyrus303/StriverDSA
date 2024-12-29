// Count inversions in an array
//
// Problem Statement: Given an array of N integers, count the inversion of the array (using merge-sort).
//
// What is an inversion of an array? Definition: for all i & j < size of array, if i < j
// then you have to find pair (A[i],A[j]) such that A[j] < A[i].
//
// Examples
// Example 1:
// Input Format
// : N = 5, array[] = {1,2,3,4,5}
// Result
// : 0
// Explanation
// : we have a sorted array and the sorted array has 0 inversions as for i < j you will never find a pair such that A[j] < A[i].
// More clear example: 2 has index 1 and 5 has index 4 now 1 < 5 but 2 < 5 so this is not an inversion.
//
// Example 2:
// Input Format
// : N = 5, array[] = {5,4,3,2,1}
// Result
// : 10
// Explanation
// : we have a reverse sorted array and we will get the maximum inversions as for i < j we will always find a pair such that A[j] < A[i].
// Example: 5 has index 0 and 3 has index 2 now (5,3) pair is inversion as 0 < 2 and 5 > 3
// which will satisfy out conditions and for reverse sorted array we will get maximum inversions and that is (n)*(n-1) / 2.
// For above given array there is 4 + 3 + 2 + 1 = 10 inversions.
//
// Example 3:
// Input Format
// : N = 5, array[] = {5,3,2,1,4}
// Result
// : 7
// Explanation
// : There are 7 pairs (5,1), (5,3), (5,2), (5,4),(3,2), (3,1), (2,1) and we have left 2 pairs (2,4) and (1,4) as both are not satisfy our condition.

export {};

const numbers = [5, 3, 2, 1, 4];

const bruteForceSolution = (arr: number[]) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
  }
  return count;
};

console.log(bruteForceSolution(numbers));

const merge = (arr: number[], start: number, mid: number, end: number) => {
  const temp = [];
  let i = start;
  let j = mid + 1;
  let inversionCount = 0;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
      inversionCount += mid - i + 1;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let idx = 0; idx < temp.length; idx++) {
    arr[idx + start] = temp[idx];
  }
  return inversionCount;
};

const mergeSort = (arr: number[], start: number, end: number): number => {
  if (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    const leftInvCount = mergeSort(arr, start, mid);
    const rightInvCount = mergeSort(arr, mid + 1, end);

    const mergeInvCount = merge(arr, start, mid, end);

    return leftInvCount + rightInvCount + mergeInvCount;
  }
  return 0;
};

const optimisedSolution = (arr: number[]) => {
  const ans = mergeSort(arr, 0, arr.length - 1);
  return ans;
};

console.log(optimisedSolution(numbers));
