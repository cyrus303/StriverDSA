export {};

const N = 4;
const M = 69;

// const bruteForceSolution = (arr: number[]) => {};
//
// console.log(bruteForceSolution(numbers));

const optimisedSolution = (N: number, M: number) => {
  let start = 1;
  let end = M;
  let ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const val = mid ** N;

    if (val === M) return mid;
    else if (val < M) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

console.log(optimisedSolution(N, M));
//
// const optimalSolution = (arr: number[]) => {};
//
// console.log(optimalSolution(arr));
