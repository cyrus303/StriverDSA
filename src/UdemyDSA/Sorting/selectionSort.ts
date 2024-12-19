//Selection Sort
export {};
const SelectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
};

const inputArr = [98, 45, 67, 23, 56, 87, 34, 12, 45, 1, 6, 8, 2];
const answer = SelectionSort(inputArr);
console.log(answer);
