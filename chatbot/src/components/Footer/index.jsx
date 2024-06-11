import React from "react";
import style from "./footer.module.css";
import { useEffect, useState, useRef } from "react";

export default function Footer({
  handleClick,
  handleEnter,
  userInactiveMessage,
}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  const timeoutId = useRef(0);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      userInactiveMessage();
      console.log("ajslhdbf");
      console.log(timeoutId.current);
    }, 5000);
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        console.log("cleanup");
      }
    };
  }, [inputValue]);
  return (
    <>
      <div className={style.footer}>
        <input
          type="text"
          name="inputtext"
          id="messageInput"
          value={inputValue}
          ref={inputRef}
          placeholder="Enter the text here..."
          onKeyPress={(e) => {
            if (e.code == "Enter") {
              handleEnter(inputValue);
              setInputValue("");
            }
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e, inputValue);
            setInputValue("");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}
