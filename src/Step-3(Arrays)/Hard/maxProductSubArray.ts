// Maximum Product Subarray in an Array
//
// Problem Statement: Given an array that contains both negative and positive integers,
// find the maximum product subarray.
//
// Examples
//
// Example 1:
//
// Input:Nums = [1,2,3,4,5,0]
// Output: 120
//
// Explanation:
//  In the given array, we can see 1×2×3×4×5 gives maximum product value.
//
// Example 2:
//
// Input: Nums = [1,2,-3,0,-4,-5]
// Output: 20
//
// Explanation:
//  In the given array, we can see (-4)×(-5) gives maximum product value.

export {};

const numbers = [1, 2, -3, 0, -4, -5];
// const numbers = [2, 3, -2, -5, 6, -1, 4];
// const numbers = [1, 2, 3, 4, 5, 0];

const bruteForceSolution = (arr: number[]) => {
  let result = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    let p = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      result = Math.max(result, p);
      p *= arr[j];
    }
    result = Math.max(result, p); // manages (n-1)th term
  }
  return result;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  const n = arr.length;
  let leftProduct = 1;
  let rightProduct = 1;
  let ans = arr[0];

  for (let i = 0; i < n; i++) {
    if (leftProduct === 0) leftProduct = 1;
    if (rightProduct === 0) rightProduct = 1;

    leftProduct *= arr[i];
    rightProduct *= arr[n - 1 - i];

    ans = Math.max(ans, Math.max(leftProduct, rightProduct));
  }
  return ans;
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
