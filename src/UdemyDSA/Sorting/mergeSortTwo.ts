// Merge sort using index

export {};

const merge = (arr: number[], start: number, mid: number, end: number) => {
  const temp = [];
  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= end) {
    temp.push(arr[j]);
    j++;
  }

  for (let idx = 0; idx < temp.length; idx++) {
    arr[idx + start] = temp[idx];
  }
};

const mergeSort = (arr: number[], start: number, end: number) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    merge(arr, start, mid, end);
  }
};

const inputArr = [12, 31, 35, 8, 32, 17];
mergeSort(inputArr, 0, inputArr.length - 1);

console.log(inputArr);
