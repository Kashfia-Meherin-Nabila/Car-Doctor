"use client";

import { useState, useEffect } from "react";

export default function Counter({ from = 0, to, duration = 2000 }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const end = to;
    const totalDuration = duration;
    const incrementTime = 20; 
    const steps = totalDuration / incrementTime;
    const increment = (end - start) / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [from, to, duration]);

  return <span>{count}</span>;
}
