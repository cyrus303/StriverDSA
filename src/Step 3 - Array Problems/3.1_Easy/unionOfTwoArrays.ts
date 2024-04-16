/*
Union of Two Sorted Arrays

Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

Examples
Example 1:
Input:

n = 5,m = 5.
arr1[] = {1,2,3,4,5}
arr2[] = {2,3,4,4,5}
Output:

 {1,2,3,4,5}

Explanation:

Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5}

Example 2:
Input:

n = 10,m = 7.
arr1[] = {1,2,3,4,5,6,7,8,9,10}
arr2[] = {2,3,4,4,5,11,12}
Output:
 {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation:

Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}
*/

export {};

const solution = (arr1: number[], arr2: number[]) => {
  const arr3 = [...arr1, ...arr2];
  const unionArr = new Set(arr3);
  return unionArr;
};

const solution2 = (arr1: number[], arr2: number[]) => {
  const onlyUnique = (
    value: number,
    index: number,
    array: number[]
  ) => {
    return array.indexOf(value) === index;
  };

  const unique1 = [...arr1, ...arr2].filter(onlyUnique);
  return unique1;
};

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];

const result = solution(arr1, arr2);
const result2 = solution2(arr1, arr2);
console.log('result', result);
console.log('result2', result2);
