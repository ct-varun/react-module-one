import React from "react";
import style from "./footer.module.css";
import Messages from "../messages/messages";
import { useEffect, useState, useRef } from "react";
import * as utilities from "../../utility/utilities.jsx";

export default function Footer() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const inputRef = useRef("");
  const [myObj, setMyObj] = useState([
    {
      text: [{ label: "bring it on", figure: "" }],
      id: "bot",
      date: `${date.getDate()} ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`,
    },
  ]);
  const [indicator, setIndicator] = useState(0);

  const handleEnter = () => {
    setMyObj((previousMyObj) => {
      return [
        ...previousMyObj,
        {
          text: inputRef.current.value,
          id: "user",
          date: `${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`,
        },
        {
          text: handleReply(inputRef.current.value),
          id: "bot",
          date: `${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`,
        },
      ];
    });
    setIndicator(1);
    Timeout();
  };

  const handleClick = (e) => {
    e.preventDefault();
    setMyObj((previousMyObj) => [
      ...previousMyObj,
      {
        text: inputRef.current.value,
        id: "user",
        date: `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`,
      },
      {
        text: handleReply(inputRef.current.value),
        id: "bot",
        date: `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`,
      },
    ]);
    setIndicator(1);
    Timeout();
  };

  const handleReply = (input) => {
    input = input.trim();
    let result = "";
    let characterCountResult = utilities.characterCount(input);
    let alphabetCountResult = utilities.alphabetCount(input);
    let digitsCountResult = utilities.digitsCount(input);
    let vowelCountResult = utilities.vowelCount(input);
    let consonantCountResult = utilities.consonantCount(input);
    let specialCharCountResult = utilities.specialCharCount(input);
    let wordCountResult = utilities.wordCount(input);
    let averageWordLengthResult = utilities.avgWordLength(input);
    result = [
      { label: "The results of the analyzation are here:", figure: "" },
      { label: "characters count is", figure: characterCountResult },
      { label: "alphabets count is", figure: alphabetCountResult },
      { label: "digits count is", figure: digitsCountResult },
      { label: "vowel count is", figure: vowelCountResult },
      { label: "consonants count is", figure: consonantCountResult },
      { label: "special characters count", figure: specialCharCountResult },
      { label: "words count is", figure: wordCountResult },
      { label: "average word length is", figure: averageWordLengthResult },
    ];
    return result;
  };

  const timeoutId = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    Timeout();
  }, []);

  useEffect(() => {
    inputRef.current.value = "";
  }, [indicator]);

  function Timeout() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setMyObj((previousMyObj) => {
        return [
          ...previousMyObj,
          {
            text: [{ label: "are you still there?", figure: "" }],
            id: "bot",
            date: `${date.getDate()} ${
              months[date.getMonth()]
            }, ${date.getFullYear()}`,
          },
        ];
      });
    }, 5000);
  }

  return (
    <>
      <Messages message={myObj} />
      <div className={style.footer}>
        <input
          type="text"
          name="inputtext"
          id="messageInput"
          ref={inputRef}
          placeholder="Enter the text here..."
          onKeyPress={(e) => {
            if (e.code == "Enter") {
              handleEnter();
            }
          }}
          onChange={() => {
            Timeout();
          }}
        />
        <button type="reset" onClick={handleClick}>
          Send
        </button>
      </div>
    </>
  );
}
