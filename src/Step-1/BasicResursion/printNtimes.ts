// Problem: Print your Name N times using recursion

//NOTE: Recursion without parameter
let count = 1;
const printValue = () => {
  if (count > 10) return;
  console.log("value", count++);
  printValue();
};

printValue();

//NOTE: Recursion with parameter
const printName = (i: number, n: number) => {
  if (i > n) {
    return;
  }
  console.log("call", i, n);
  printName(i + 1, n);
};

printName(1, 10);
