import { useState, useEffect } from "react";

const timeFormat = (date) => {
  if (!date) return "00:00";

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  return `${mm}:${ss}`;
};

export default function Timer({ gameOver, handleTimeRecord }) {
  const [init] = useState(+new Date());
  const [diff, setDiff] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - init));
  };

  useEffect(() => {
    if (!gameOver && init) {
      requestAnimationFrame(tick);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!gameOver && diff) {
      requestAnimationFrame(tick);
    }
  }, [diff, gameOver]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (gameOver) {
      cancelAnimationFrame(tick);
      handleTimeRecord(timeFormat(diff));
    }
  }, [gameOver]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span data-testid="testid-timer" className="timer">
      {timeFormat(diff)}
    </span>
  );
}
