export {};

const isSorted = (arr: number[], N: number): boolean => {
  if (N === 0 || N === 1) {
    return true;
  }
  return arr[N - 1] >= arr[N - 2] && isSorted(arr, N - 1);
};

function main() {
  const arr = [1, 4, 3, 4, 5, 6, 7, 8, 9, 10];
  const N = 10;
  const result = isSorted(arr, N);
  console.log("result ->", result);
}

main();
