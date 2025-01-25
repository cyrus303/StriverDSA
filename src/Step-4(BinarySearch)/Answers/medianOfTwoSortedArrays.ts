// 4. Median of Two Sorted Arrays
// Hard
// Topics
// Companies
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//
// The overall run time complexity should be O(log (m+n)).
//
//
//
// Example 1:
//
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
//
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

export {};

const nums1 = [1, 3, 4, 7, 10, 12];
const nums2 = [2, 3, 6, 15];

const bruteForceSolution = (nums1: number[], nums2: number[]) => {
  const ans = [];
  let i = 0;
  let j = 0;

  const n = nums1.length;
  const m = nums2.length;

  while (i < n && j < m) {
    if (nums1[i] <= nums2[j]) {
      ans.push(nums1[i]);
      i++;
    } else {
      ans.push(nums2[j]);
      j++;
    }
  }

  while (i < n) {
    ans.push(nums1[i]);
    i++;
  }

  while (j < m) {
    ans.push(nums2[j]);
    j++;
  }

  if (ans.length % 2 === 0) {
    const index = Math.floor(ans.length / 2);
    return (ans[index - 1] + ans[index]) / 2;
  } else {
    const index = Math.floor(ans.length / 2);
    return ans[index];
  }
};

console.log(bruteForceSolution(nums1, nums2));

const optimisedSolution = (nums1: number[], nums2: number[]) => {
  let n1 = nums1.length;
  let n2 = nums2.length;

  if (n1 > n2) return optimisedSolution(nums2, nums1);

  let eleRequired = Math.floor((n1 + n2 + 1) / 2);
  let totalLength = n1 + n2;

  let start = 0;
  let end = n1;

  while (start <= end) {
    let mid1 = Math.floor((start + end) / 2);
    let mid2 = eleRequired - mid1;

    let l1 = -Infinity;
    let l2 = -Infinity;
    let r1 = Infinity;
    let r2 = Infinity;

    if (mid1 < n1) r1 = nums1[mid1];
    if (mid2 < n2) r2 = nums2[mid2];

    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];

    if (l1 <= r2 && l2 <= r1) {
      if (totalLength % 2 === 0) {
        let value = Math.max(l1, l2) + Math.min(r1, r2);
        return value / 2.0;
      } else {
        return Math.max(l1, l2);
      }
    } else if (l1 > r2) end = mid1 - 1;
    else start = mid1 + 1;
  }
};

console.log(optimisedSolution(nums1, nums2));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
