//Bubble Sort
export {};
const bubbleSort = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // NOTE: Swapping using temp variable

        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        //
        // NOTE: Swapping using destructuring values

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

const numbers = [37, 45, 29, 8, 12, 27];
const ans = bubbleSort(numbers);
console.log(ans);
