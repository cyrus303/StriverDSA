export {};

const fib = (num: number): number => {
  if (num === 0 || num === 1) return num;
  return fib(num - 1) + fib(num - 2);
};

function main() {
  const result = fib(3);
  console.log("result ->", result);
}

main();
