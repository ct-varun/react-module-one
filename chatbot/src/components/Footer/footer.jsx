import React from "react";
import style from "./footer.module.css";
import Messages from "../messages/messages";
import { useEffect, useState, useRef } from "react";

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

  const handleEnter = () => {
    setMyObj((previousMyObj) => {
      console.log("previous object value", previousMyObj);
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
    // console.log("input ref value", inputRef.current.value);
    // inputRef.current.value = "";
    // console.log("input ref value", inputRef.current.value);
    Timeout();
  };

  const handleReply = (input) => {
    console.log("the input inside handle reply", input);
    const vowels = ["a", "e", "i", "o", "u"];
    input = input.trim();
    function wordCount(paragraph) {
      paragraph = paragraph.trim();
      let p = paragraph.split(/[\s,\t,\n]+/);
      // let newStr = str.replace(/\s+/g, ' ');
      if (p.length === 1 && p[0] === "") {
        return 0;
      }
      return p.length;
    }

    function avgWordLength(paragraph) {
      let p = paragraph.split(/[\s,\t,\n]+/);
      let sum = 0,
        avg = 0;
      for (let item of p) {
        sum = sum + item.length;
      }
      if (p.length == 0) {
        avg = 0;
      } else {
        avg = sum / p.length;
      }
      return avg;
    }

    function specialCharCount(paragraph) {
      const specialCharacters = ["_", "$", "%"];
      let count = 0;
      for (let item of paragraph) {
        if (specialCharacters.includes(item)) {
          count++;
        }
      }
      return count;
    }

    function digitsCount(paragraph) {
      const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let count = 0;
      for (let item of paragraph) {
        if (numbers.includes(item)) {
          count++;
        }
      }
      return count;
    }

    function vowelCount(paragraph) {
      let count = 0;
      for (let item of paragraph) {
        if (vowels.includes(item)) {
          count++;
        }
      }
      return count;
    }

    function characterCount(paragraph) {
      let p = paragraph.replaceAll(" ", "");
      return p.length;
    }

    function alphabetCount(paragraph) {
      let count = 0;
      for (let item in paragraph) {
        if (
          paragraph.charCodeAt(item) >= 97 &&
          paragraph.charCodeAt(item) <= 122
        ) {
          // (item >= 'a' && item <= 'z')
          count++;
        }
      }
      return count;
    }

    function consonantCount(paragraph) {
      // let alphabets = alphabetCount(paragraph);
      // let vowels = vowelCount(paragraph);
      // let consonants = alphabets - vowels;
      let count = 0;
      for (let item of paragraph) {
        if (item >= "a" && item <= "z" && !vowels.includes(item)) count++;
      }
      return count;
    }
    let result = "";
    let characterCountResult = characterCount(input);
    let alphabetCountResult = alphabetCount(input);
    let digitsCountResult = digitsCount(input);
    let vowelCountResult = vowelCount(input);
    let consonantCountResult = consonantCount(input);
    let specialCharCountResult = specialCharCount(input);
    let wordCountResult = wordCount(input);
    let averageWordLengthResult = avgWordLength(input);
    // result = `applying all analyzations, characters count is ${characterCountResult}, alphabets count is ${alphabetCountResult}, digits count is ${digitsCountResult}, vowel count is ${vowelCountResult}, consonants count is ${consonantCountResult}, special characters count is ${specialCharCountResult}, words count is ${wordCountResult}, average word length is ${averageWordLengthResult}`;
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
    // console.log(result);
    return result;
  };

  const timeoutId = useRef(1);
  function debouncing() {
    timeoutId.current = setTimeout(() => {
      setMyObj((previousMyObj) => [
        ...previousMyObj,
        {
          text: [{ label: "are you still there?", figure: "" }],
          id: "bot",
          date: `${date.getDate()} ${
            months[date.getMonth()]
          }, ${date.getFullYear()}`,
        },
      ]);
      console.log("the timeout that was the first timeout has run");
    }, 5000);
    // console.log("the first timeout and its timeout id is", timeoutId.current);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    debouncing();
  }, []);
  useEffect(() => {
    inputRef.current.value = "";
  }, [myObj]);

  function Timeout() {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      console.log("the timeout that was cleared is", timeoutId.current);
    }
    console.log("the object that the timeout got is", myObj);
    timeoutId.current = setTimeout(() => {
      setMyObj((previousMyObj) => {
        console.log("this is the value of the previous object", previousMyObj);
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
      console.log("the timeout set on onchange and onclick has run");
      //   setTimeout(() => {
      //     console.log("hey this is my object", myObj);
      //   }, 5000);
    }, 5000);
    console.log("the timeout set on onChange and onClick", timeoutId.current);
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
            console.log("value of the input ref", inputRef.current.value);
          }}
        />
        <button type="reset" onClick={handleClick}>
          Send
        </button>
      </div>
    </>
  );
}
