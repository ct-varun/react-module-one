import React from "react";
import { useState, useEffect } from "react";

function CounterDisplay({ counterLimit, startIndicator, resetValue }) {
  const [counterValue, setCounterValue] = useState(counterLimit ?? 0);
  useEffect(() => {
    setCounterValue(counterLimit ?? 0);
  }, [resetValue, counterLimit]);
  useEffect(() => {
    let interValId;
    if (startIndicator) {
      interValId = setInterval(() => {
        setCounterValue((previousValue) => {
          if (previousValue > 0) {
            return previousValue - 1;
          } else {
            clearInterval(interValId);
            return previousValue;
          }
        });
      }, 1000);
    }
    return () => {
      if (interValId) {
        clearInterval(interValId);
      }
    };
  }, [startIndicator]);
  const days = Math.floor(counterValue / 86400);
  const remainingHours = counterValue % 86400;
  const hours = Math.floor(remainingHours / 3600);
  const remainingMinutes = remainingHours % 3600;
  const minutes = Math.floor(remainingMinutes / 60);
  const seconds = Math.floor(remainingMinutes % 60);

  return (
    <div>
      {days > 0 ? `${days} days ` : " 0 days "}
      {hours > 0 ? `${hours} hours ` : "0 hours "}
      {minutes > 0 ? `${minutes}  minutes ` : "0 minutes "}
      {seconds > 0 ? `${seconds} seconds ` : "0 seconds "}
    </div>
  );
}

export default CounterDisplay;
