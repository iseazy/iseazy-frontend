export function start() {
  const startTime = new Date();
  return startTime;
}

export function end(startTime) {
  const endTime = new Date();
  let timeDiff = endTime - startTime;
  //change for seconds
  timeDiff /= 1000;

  // get seconds
  let seconds = Math.round(timeDiff);
  console.log(seconds + ' seconds');
}
