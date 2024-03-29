// const reverse = (str) => {
//   strArr = str.split('');
//   let resultArr = [];
//   for (let index = strArr.length - 1; index >= 0; index--) {
//     let x = strArr[index];
//     resultArr.push(x);
//   }
//   console.log(resultArr.join(''));
// };

// reverse('hello good morning');

const solution = (str) => {
  let values = str.split(' ');
  const test = values.map((value) => {
    let letter = value[0].toUpperCase() + value.slice(1);
    return letter;
  });

  console.log(test.join(' '));
};

solution('hello good morning');
