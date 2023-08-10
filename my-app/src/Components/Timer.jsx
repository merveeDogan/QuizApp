import { useEffect, useState } from "react";
export default function Timer({ setTimeOver, questionNumber }) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) return setTimeOver(true);
    const remaining = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(remaining);
  }, [timer, setTimeOver]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
}
