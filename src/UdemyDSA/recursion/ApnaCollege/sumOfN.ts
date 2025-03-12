export {};

const sumOfN = (num: number): number => {
  if (num === 0) return 0;
  return num + sumOfN(num - 1);
};

function main() {
  const result = sumOfN(4);
  console.log("result ->", result);
}

main();
