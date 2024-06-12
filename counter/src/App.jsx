import React from "react";
import CounterInput from "./Components/counterInput";
import { useState } from "react";
import CounterDisplay from "./Components/displayCounter";

function App() {
  const [counterLimit, setCounterLimit] = useState(null);
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const handleCounterInput = (value) => {
    setCounterLimit(value);
  };
  const handleStart = () => {
    setStart(true);
  };
  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setReset((previousValue) => !previousValue);
    setStart(false);
  };
  return (
    <>
      <CounterInput handleCounterInput={handleCounterInput} />
      <CounterDisplay
        counterLimit={counterLimit}
        startIndicator={start}
        resetValue={reset}
      />
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
export default App;
