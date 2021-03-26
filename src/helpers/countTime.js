// get start time
export function start() {
  const startTime = new Date();
  return startTime;
}

//get total time spend in game
export function end(startTime) {
  const endTime = new Date();
  let timeDiff = endTime - startTime;
  //change for seconds
  timeDiff /= 1000;

  // get time
  let seconds = Math.round(timeDiff);
  let min = parseInt(seconds / 60);
  let rest = seconds % 60;
  let time = `${min} : ${rest < 10 ? `0${rest}` : rest}`;
  return time;
}
