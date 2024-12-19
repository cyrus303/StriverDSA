export {};

const naiveStringSearch = (inputStr: string, targetStr: string) => {
  let count = 0;
  for (let i = 0; i < inputStr.length; i++) {
    for (let j = 0; j < targetStr.length; j++) {
      if (targetStr[j] !== inputStr[i + j]) {
        break;
      }
      if (j === targetStr.length - 1) {
        count++;
      }
    }
  }
  console.log("count ->", count);
};

const inputStr = "omzlolomgroflomgff";
const targetStr = "omg";

naiveStringSearch(inputStr, targetStr);
