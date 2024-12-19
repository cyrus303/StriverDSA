//Insertion Sort

export {};

const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    let curValue = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > curValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = curValue;
  }
  return arr;
};

const inputArr = [2, 1, 9, 76, 4];

const ans = insertionSort(inputArr);
console.log(ans);
