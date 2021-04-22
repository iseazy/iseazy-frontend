const formatTime = (string, pad, length) => {
  return (new Array(length + 1).join(pad) + string).slice(-length);
};

const getTimeInMinutes = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;
  return `${minutes}:${formatTime(seconds, '0', 2)}`;
};

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export { getTimeInMinutes, wait };
