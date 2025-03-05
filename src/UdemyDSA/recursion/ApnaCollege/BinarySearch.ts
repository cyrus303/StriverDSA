export {};

const binarySearch = (
  arr: number[],
  target: number,
  left: number,
  right: number,
) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] <= target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
};

function main() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 7;
  const result = binarySearch(arr, target, 0, arr.length - 1);
  console.log("result ->", result);
}

main();
