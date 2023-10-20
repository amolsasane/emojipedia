import { useState } from "react";
import "./styles.css";

var emojiDictionory = {
  "😄": "Smiling",
  "😂": "Laughing",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Innocent",
  "😍": "Heart Eyes",
  "😘": "Kissing Heart",
  "🤗": "Hugging Face",
  "😔": "Sad",
  "😴": "Sleeping",
  "😁": "Grin",
  "😅": "Sweat Smile",
  "🤣": "Rolling on the floor laughing",
  "🙂": "Slightly Smiling",
  "🙃": "Upside down face",
  "😋": "Yummy",
  "😛": "Stuck out toungue",
  "😐️": "Normal Face",
  "😑": "Expressionless",
  "🤔": "Thinking",
  "🤫": "Shushing",
  "🤐": "Zipper Mouth",
  "🤑": "Moneyholic",
  "😶": "No words",
  "😏": "Smirk",
  "😒": "Unimpressed",
  "😬": "Awkward",
  "🤥": "Lier",
  "😌": "Relieved",
  "😷": "Health Precaution Mask",
  "🤒": "Sick",
  "🤕": "Bandaged head",
  "🤢": "Disgusting",
  "🤮": "Vomit",
  "🤧": "Sneeze",
  "🥵": "Too Hot",
  "🥶": "Freezing",
  "🥴": "Drunk",
  "🤯": "Mink Blowing",
  "🤠": "Cowboy",
  "🥳": "Party",
  "😎": "Dashing",
  "🤓": "Nerdy",
  "🧐": "Somthing Fishy",
  "😮": "Surprised",
  "😨": "Scared",
  "😭": "Crying",
  "🫣": "Peeking",
  "😈": "Happy Devil",
  "🤤": "Water Dropping"
};

var myEmoji = Object.keys(emojiDictionory);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler() {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionory[inputEmoji];

    if (meaning === undefined) {
      meaning = "Oops.. cannot recognise this emoji, try another one!🧐";
    }

    setMeaning(meaning);
  }

  function clickHandler(emoji) {
    var meaning = emojiDictionory[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">
        Em<span className="heading-emoji">😎</span>jipedia
      </h1>
      <input
        className="input-box"
        placeholder="Drop your emoji here!😃"
        onChange={inputHandler}
      />
      <h2 className="meaning">{meaning}</h2>
      <h3 className="sub-heading">Most Popular Emojis</h3>
      <ul className="emoji-list">
        {myEmoji.map(function (emoji) {
          return (
            <li
              className="emoji-list-item"
              onClick={() => clickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
