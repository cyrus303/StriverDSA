const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

promise
  .then((result, error) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 10);
      }, 2000);
    });
  })
  .then((result, error) => {
    console.log(result);
    return result + 1;
  })
  .then((result, error) => {
    console.log(result);
    return result + 1;
  })
  .then((result, error) => {
    console.log(result);
    return result + 1;
  });
