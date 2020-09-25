import React from "react";

const MoreButton = (props) => {
  return (
    <button className="more-less-button" onClick={props.moreItems}>
      {props.children}
    </button>
  );
};

export default MoreButton;
