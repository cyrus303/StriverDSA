// Stock Buy And Sell
//
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
//
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
//
// Examples
// Example 1:
// Input:
//  prices = [7,1,5,3,6,4]
// Output:
//  5
// Explanation:
//  Buy on day 2 (price = 1) and
// sell on day 5 (price = 6), profit = 6-1 = 5.
//
// Note
// : That buying on day 2 and selling on day 1
// is not allowed because you must buy before
// you sell.
//
// Example 2:
// Input:
//  prices = [7,6,4,3,1]
// Output:
//  0
// Explanation:
//  In this case, no transactions are
// done and the max profit = 0.

export {};

const numbers = [7, 1, 5, 3, 6, 4];

const bruteForceSolution = (arr: number[]) => {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    let profit = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        profit = arr[j] - arr[i];
        maxProfit = Math.max(profit, maxProfit);
      }
    }
  }
  return maxProfit;
};

console.log(bruteForceSolution(numbers));

const optimisedSolution = (arr: number[]) => {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < arr.length) {
    let profit = 0;
    if (arr[left] < arr[right]) {
      profit = arr[right] - arr[left];
      maxProfit = Math.max(profit, maxProfit);
      console.log("profit", profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

console.log(optimisedSolution(numbers));

// const optimalSolution = (arr: number[]) => {};

// console.log(optimalSolution(arr1));
