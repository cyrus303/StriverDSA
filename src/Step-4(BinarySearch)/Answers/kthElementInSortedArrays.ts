export {};

const nums1 = [1, 3, 4, 7, 10, 12];
const nums2 = [2, 3, 6, 15];
const k = 3;

const optimisedSolution = (nums1: number[], nums2: number[], k: number) => {
  let n1 = nums1.length;
  let n2 = nums2.length;

  if (n1 > n2) return optimisedSolution(nums2, nums1, k);

  let eleRequired = k;

  let start = Math.min(0, k - n2);
  let end = Math.min(k, n1);

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
      return Math.max(l1, l2);
    } else if (l1 > r2) end = mid1 - 1;
    else start = mid1 + 1;
  }
};

console.log(optimisedSolution(nums1, nums2, k));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
