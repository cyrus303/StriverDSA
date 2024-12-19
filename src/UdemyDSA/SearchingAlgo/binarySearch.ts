//Binary Search Algorithm

const binarySearch = (inputArr: number[], target: number) => {
  let left = 0;
  let right = inputArr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (inputArr[middle] === target) {
      return middle;
    } else if (target < inputArr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return "not found";
};

const inputArr = [1, 3, 5, 7, 9, 11, 13, 15]; // Sorted array
const value = 5; // The value to search for

console.log(binarySearch(inputArr, value));
