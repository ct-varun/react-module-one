import React from "react";
import Messages from "../messages/index.jsx";
import Footer from "../Footer/index.jsx";
import { useEffect, useState, useRef } from "react";
import * as utilities from "../../utility/index.jsx";

export default function Main() {
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
  const [myObj, setMyObj] = useState([
    {
      text: [{ label: "bring it on", figure: "" }],
      id: "bot",
      date: `${date.getDate()} ${
        months[date.getMonth()]
      }, ${date.getFullYear()}`,
    },
  ]);
  const handleEnter = (value) => {
    setMyObj((previousMyObj) => {
      return [
        ...previousMyObj,
        {
          text: value,
          id: "user",
          date: `${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`,
        },
        {
          text: handleReply(value),
          id: "bot",
          date: `${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`,
        },
      ];
    });
  };

  const handleClick = (e, value) => {
    e.preventDefault();
    setMyObj((previousMyObj) => [
      ...previousMyObj,
      {
        text: value,
        id: "user",
        date: `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`,
      },
      {
        text: handleReply(value),
        id: "bot",
        date: `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`,
      },
    ]);
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

  const userInactiveMessage = () => {
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
  };

  return (
    <>
      <Messages message={myObj} />
      <Footer
        handleClick={handleClick}
        handleEnter={handleEnter}
        userInactiveMessage={userInactiveMessage}
      />
    </>
  );
}
