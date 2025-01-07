// 875. Koko Eating Bananas
// Medium
//
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.
//
// Koko can decide her bananas-per-hour eating speed of k. Each hour,
// she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
//
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
//
// Return the minimum integer k such that she can eat all the bananas within h hours.
//
// Example 1:
//
// Input: piles = [3,6,7,11], h = 8
// Output: 4
//
// Example 2:
//
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
//
// Example 3:
//
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

export {};

const piles = [30, 11, 23, 4, 20];
const h = 5;

const bruteForceSolution = (piles: number[], hr: number) => {
  const max = Math.max(...piles);
  for (let i = 1; i <= max; i++) {
    let totalHr = 0;
    for (let bananas of piles) {
      totalHr += Math.ceil(bananas / i);
    }

    if (totalHr <= hr) {
      return i;
    }
  }
};

console.log(bruteForceSolution(piles, h));

const calculateTotalEatingCount = (arr: number[], hourly: number) => {
  let totalHours = 0;

  for (let num of arr) {
    totalHours += Math.ceil(num / hourly);
  }

  return totalHours;
};

const optimisedSolution = (piles: number[], h: number) => {
  let start = 1;
  let end = Math.max(...piles);
  let ans = 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const totalHours = calculateTotalEatingCount(piles, mid);

    if (totalHours <= h) {
      ans = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return ans;
};

console.log(optimisedSolution(piles, h));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
