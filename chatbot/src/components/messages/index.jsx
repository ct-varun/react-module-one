import React from "react";
import style from "./messages.module.css";
import { useEffect, useRef } from "react";

export default function Messages({ message }) {
  //   console.log(message.map((item) => item.text));
  const chatWindowRef = useRef("");
  useEffect(() => {
    if (chatWindowRef.current) {
      const chatWindow = chatWindowRef.current;
      chatWindow.scrollTop = chatWindow.scrollHeight;
      // console.log(
      //   "hello this is the current scroll height",
      //   chatWindowRef.current.scrollHeight
      // );
    }
  }, [message]);
  return (
    <>
      <div ref={chatWindowRef} className={style.chatWindow}>
        {/* {messages.map((item) => {
          if (item.id == "user")
            return (
              <div className={`${style.message} ${style.user}`}>
                {item.text}
              </div>
            );
          return (
            <div className={`${style.message} ${style.bot}`}>{item.text}</div>
          );
        })} */}
        {message.map((item) => (
          <>
            <div
              className={`${style.message} ${
                item.id == "user" ? style.user : style.bot
              }`}
            >
              {item.id == "user"
                ? item.text
                : item.text.map((item) => (
                    <div>
                      {item.figure === "" ? (
                        `${item.label}`
                      ) : (
                        <>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span style={{ width: "50%" }}>{item.label}</span>
                            <span style={{ width: "50%" }}>
                              : {item.figure}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
              <div className={style.datetime}>{item.date}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
