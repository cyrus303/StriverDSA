export {};

const getPermutations = (arr: number[], i: number, ans: number[][]) => {
  if (i === arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let idx = i; idx < arr.length; idx++) {
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
    getPermutations(arr, i + 1, ans);
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }
};

function main() {
  const inputArr = [1, 1, 3];
  let i = 0;
  const ans: number[][] = [];

  getPermutations(inputArr, i, ans);
  console.log(ans);
}

main();
