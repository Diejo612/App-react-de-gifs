import React from "react";
import Gif from "./Gif";

const Giftlist = ({results, setGif}) => {
  return (
    <div className="gif-list">
      {results.map((gif) => (
        <Gif gif={gif} key={gif.id} setGif={setGif} />
      ))}
    </div>
  );
};

export default Giftlist;
