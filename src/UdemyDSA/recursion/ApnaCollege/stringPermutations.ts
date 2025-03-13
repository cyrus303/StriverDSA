export {};
const swap = (str: string, index1: number, index2: number) => {
  let newStr: string[] | string = str.split("");
  [newStr[index1], newStr[index2]] = [newStr[index2], newStr[index1]];
  newStr = newStr.join("");
  return newStr;
};

const getPermutations = (inputStr: string, i: number) => {
  if (i === inputStr.length) {
    console.log(inputStr);
    return;
  }

  for (let idx = i; idx < inputStr.length; idx++) {
    inputStr = swap(inputStr, i, idx);
    getPermutations(inputStr, i + 1);
    inputStr = swap(inputStr, i, idx);
  }
};

function main() {
  let inputStr = "123";
  let i = 0;

  getPermutations(inputStr, i);
}

main();
