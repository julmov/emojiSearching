import React, { useState, useEffect } from "react";
import "../App.css";
import emojiData from "../emojis.json";

const EmojiList = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <h1>Emoji search</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="inputEmoji"
      />
      <div className="emoji-container">
        {data.map((emoji) => (
          <h2 key={emoji.title}>{emoji.symbol}</h2>
        ))}
      </div>
    </div>
  );
};

export default EmojiList;
