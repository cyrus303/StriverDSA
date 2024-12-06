// 2149. Rearrange Array Elements by Sign
// Medium
//
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
//
// You should return the array of nums such that the the array follows the given conditions:
//
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
//
//
//
// Example 1:
//
// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not
// satisfy one or more conditions.
// Example 2:
//
// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

export {};

const numbers = [3, 1, -2, -5, 2, -4];

const bruteForceSolution = (arr: number[]) => {
  let positiveArr = [];
  let negativeArr = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      negativeArr.push(element);
    } else {
      positiveArr.push(element);
    }
  }

  let longest = Math.max(positiveArr.length, negativeArr.length);

  for (let i = 0; i < longest; i++) {
    let positiveEle = positiveArr[i];
    let negativeEle = negativeArr[i];
    if (positiveEle !== undefined) {
      resultArr.push(positiveEle);
    }
    if (negativeEle !== undefined) {
      resultArr.push(negativeEle);
    }
  }

  return resultArr;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let positiveArr = [];
  let negativeArr = [];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element < 0) {
      negativeArr.push(element);
    } else {
      positiveArr.push(element);
    }
  }

  for (let i = 0; i < arr.length / 2; i++) {
    resultArr[2 * i] = positiveArr[i];
    resultArr[2 * i + 1] = negativeArr[i];
  }

  return resultArr;
};

console.log(optimisedSolution(numbers));

const optimalSolution = (arr: number[]) => {
  let posIndex = 0;
  let negIndex = 1;

  let resultArr: number[] = [];

  arr.forEach((element) => {
    if (element > 0) {
      resultArr[posIndex] = element;
      posIndex += 2;
    } else {
      resultArr[negIndex] = element;
      negIndex += 2;
    }
  });
  return resultArr;
};

console.log(optimalSolution(numbers));
