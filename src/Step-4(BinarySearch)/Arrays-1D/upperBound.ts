export {};

const numbers = [3, 5, 8, 15, 19];
const target = 9;

const bruteForceSolution = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      return i;
    }
  }
  return arr.length;
};

console.log(bruteForceSolution(numbers, target));

const optimisedSolution = (arr: number[], target: number) => {
  let start = 0;
  let end = arr.length - 1;
  let upperBound = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) {
      upperBound = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return upperBound;
};

console.log(optimisedSolution(numbers, target));
