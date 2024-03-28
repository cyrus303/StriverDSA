//Recurive code to print numbers
export {};

let count = 0;
const solution = () => {
  if (count === 3) return; //Base Condition
  console.log(count);
  count++;
  solution(); //Recursive Call In The Body
};

solution(); //Trigger
