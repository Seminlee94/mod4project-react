import React from "react";

const LessButton = (props) => {
  return (
    <button className="more-less-button" onClick={props.leftItems}>
      left
    </button>
  );
};

export default LessButton;
