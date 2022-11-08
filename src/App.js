import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😄": "Smile",
  "😆": "Laughing",
  "😉": "Wink",
  "😍": "Heart Eyes",
  "😋": "Yum",
  "🤔": "Thinking Face",
  "😏": "Smirk"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function userInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="heading">Inside outtt!</h1>
      <input id="input-box" onChange={userInputHandler}></input>
      <h2 id="desc"> {meaning}</h2>
      <h3 class="head">Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            id="emoji-list"
            onClick={() => onClickHandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
