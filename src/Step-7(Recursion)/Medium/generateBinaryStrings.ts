// Generate all binary strings without consecutive 1’s

// Examples:
//
// Input : K = 3
// Output : 000 , 001 , 010 , 100 , 101
// Input : K  = 4
// Output :0000 0001 0010 0100 0101 1000 1001 1010

export {};

const printBinaryStr = (depth: number, str: string, K: number) => {
  if (depth === K) {
    console.log(str);
    return;
  }
  const lastChar = str.at(-1);

  if (lastChar === "1") {
    let tempStr = str;
    tempStr += "0";

    printBinaryStr(depth + 1, tempStr, K);
  }

  if (lastChar === "0") {
    let tempStr1 = str;
    let tempStr2 = str;

    tempStr1 += "0";
    printBinaryStr(depth + 1, tempStr1, K);

    tempStr2 += "1";
    printBinaryStr(depth + 1, tempStr2, K);
  }
};

function main() {
  const K = 5;
  let depth = 1;

  let str1 = "0";
  printBinaryStr(depth + 1, str1, K);

  let str2 = "1";
  printBinaryStr(depth + 1, str2, K);
}

main();
