// 18. 4Sum
// Medium
//
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
//
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
//
// Example 1:
//
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
//
// Example 2:
//
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

export {};

const nums = [2, 2, 2, 2, 2];
const target = 8;

const bruteForceSolution = (arr: number[], target: number) => {
  const ans = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === target) {
            ans.add(JSON.stringify([arr[i], arr[j], arr[k], arr[l]]));
          }
        }
      }
    }
  }
  return Array.from(ans).map((ele: any) => JSON.parse(ele));
};

console.log(bruteForceSolution(nums, target));

const optimisedSolution = (arr: number[], target: number) => {
  const ans = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    //NOTE: remove duplicates optimisation 1
    if (i > 0 && arr[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < arr.length; ) {
      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          ans.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          right--;

          //NOTE: remove duplicates optimisation 2
          while (left < right && arr[left] === arr[left - 1]) left++;
        }
      }

      //NOTE: remove duplicates optimisation 3
      j++;
      while (j > 0 && arr[j] === arr[j - 1]) j++;
    }
  }
  return ans;
};

console.log(optimisedSolution(nums, target));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
