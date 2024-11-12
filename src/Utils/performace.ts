//NOTE: calculate time taken for a function to execute using performace.now()

export const calculatePerformace = (callback: CallableFunction) => {
  let start = performance.now();
  callback();
  let timeTaken = performance.now() - start;
  console.log("Time Taken: ", timeTaken / 1000, "sec");
};
