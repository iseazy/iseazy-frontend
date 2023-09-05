import { useState, useEffect } from "react";
import { timeFormat } from "../utils/timeFormat";

export default function Timer({ gameOver, handleTimeRecord }) {
  const [init] = useState(+new Date());
  const [diff, setDiff] = useState(null);

  useEffect(() => {
    const tick = () => {
      setDiff(new Date(+new Date() - init));
    };

    if (!gameOver && (diff || init)) {
      requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(tick);
      handleTimeRecord(timeFormat(diff));
    }
  }, [init, diff, gameOver, handleTimeRecord]);

  return (
    <span data-testid="testid-timer" className="timer">
      {timeFormat(diff)}
    </span>
  );
}
