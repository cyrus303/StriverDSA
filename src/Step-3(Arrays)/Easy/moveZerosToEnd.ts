// Move all Zeros to the end of the array
//
// In this article we will learn how to solve the most asked coding interview problem: "Move all Zeros to the end of the array"
//
// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
//
// Examples
// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
//
// Example 2:
// Input:
//  1,2,0,1,0,4,0
// Output:
//  1,2,1,4,0,0,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

export {};

const inputArr = [1, 0, 2, 3, 0, 4, 0, 1];

const bruteForceSolution = (arr: number[]) => {
  console.log("Input Array ->,", arr);
  const outputArr: number[] = [];
  let count = 0;
  arr.forEach((ele) => {
    if (ele === 0) {
      count++;
    } else {
      outputArr.push(ele);
    }
  });
  while (count > 0) {
    outputArr.push(0);
    count--;
  }
  return outputArr;
};

console.log(bruteForceSolution(inputArr));

const optimisedSolution = (arr: number[]) => {
  let index = 0;

  // Move all non-zero elements to the front
  arr.forEach((ele) => {
    if (ele !== 0) {
      arr[index++] = ele;
    }
  });

  // Fill the rest with zeros
  while (index < arr.length) {
    arr[index++] = 0;
  }
};

const inputArray2 = [1, 0, 8, 0, 6, 0, 2, 3, 4, 0];
optimisedSolution(inputArray2);
console.log(inputArray2);

const optimalSolution = (arr: number[]) => {
  console.log("optimal solution");

  let j = -1;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }
  if (j === -1) {
    return arr;
  }

  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
};

const input = [1, 0, 8, 0, 6, 0, 2, 3, 4, 0];
console.log(optimalSolution(input));
