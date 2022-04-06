import { useState, useEffect } from "react";
import { timeFormat } from "../utils/timeFormat";

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
