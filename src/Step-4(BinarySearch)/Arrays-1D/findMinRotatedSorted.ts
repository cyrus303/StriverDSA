// 153. Find Minimum in Rotated Sorted Array
// Medium
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
//
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
//
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
//
// You must write an algorithm that runs in O(log n) time.

export {};

const arr = [4, 5, 6, 7, 0, 1, 2];

const bruteForceSolution = (arr: number[]) => {
  let start = 0;
  let end = arr.length - 1;
  let minimum = Infinity;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[start] <= arr[mid]) {
      minimum = Math.min(minimum, arr[start]);
      start = mid + 1;
    } else {
      minimum = Math.min(minimum, arr[mid]);
      end = mid - 1;
    }
  }
  return minimum;
};

console.log(bruteForceSolution(arr));

// const optimisedSolution = (arr: number[]) => {};
//
// console.log(optimisedSolution(arr));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
