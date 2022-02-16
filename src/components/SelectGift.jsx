import React from "react";

const SelectGift = ({gif}) => {
  return (
    <div className="selected-gif">
      <img
        src={gif.images.downsized.url}
        alt="..."
        className="gif"
      />
    </div>
  );
};

export default SelectGift;
