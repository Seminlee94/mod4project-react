import React from "react";

const FridgeButton = (props) => {
  const onClick = (e) => {
    return props.moveToFridge(props.item, props.clickedItemIndex);
  };
  return (
    <button className="fridge-button" onClick={onClick}>
      {props.children}
    </button>
  );
};

export default FridgeButton;
