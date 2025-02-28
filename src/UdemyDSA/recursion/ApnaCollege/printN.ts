export {};

const printNums = (num: number) => {
  console.log(num);
  if (num === 1) return 1;
  return printNums(num - 1);
};

function main() {
  printNums(4);
}

main();
