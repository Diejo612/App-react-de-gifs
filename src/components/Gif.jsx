import React from 'react';

const Gif = ({gif, setGif}) => {

  const handleClick = () => {
     if (setGif) {
       setGif(gif);
     }
  }

  return <img src={gif.images.downsized.url} className="gif" alt="gif" onClick={handleClick} />;
}

export default Gif;
