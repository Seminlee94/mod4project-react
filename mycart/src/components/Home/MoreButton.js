import React from "react";

const MoreButton = (props) => {
  return (
    <button className="more-less-button" onClick={props.moreItems}>
      right
    </button>
  );
};

export default MoreButton;
