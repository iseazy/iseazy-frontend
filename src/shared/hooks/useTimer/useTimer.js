import React, { useEffect, useRef } from 'react';

const useTimer = (initValue) => {
  const [on, setOnOff] = React.useState(true);
  const [seconds, setSeconds] = React.useState(initValue);
  const countRef = useRef(seconds);
  countRef.current = seconds;

  useEffect(() => {
    let interval;
    if (on) {
      interval = setInterval(() => {
        let currCount = countRef.current;
        setSeconds(currCount + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  return [seconds, setOnOff];
};

export { useTimer };
