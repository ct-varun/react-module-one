import React from "react";
import { useState, useEffect } from "react";

function counterInput({ handleCounterInput }) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    document.getElementById("timelimitinput").focus();
  }, []);
  return (
    <>
      <label htmlFor="timelimitinput">Enter the time in seconds</label>
      <input
        type="number"
        id="timelimitinput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleCounterInput(inputValue);
        }}
      >
        submit
      </button>
    </>
  );
}

export default counterInput;
