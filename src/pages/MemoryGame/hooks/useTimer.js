import { useState, useEffect } from 'react';

export default function useTimer(initialValue, isRunning) {
  const [timer, setTimer] = useState(initialValue);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return [timer, setTimer];
}
