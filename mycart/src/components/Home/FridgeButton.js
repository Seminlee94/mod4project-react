import React from "react";

const FridgeButton = (props) => {
  console.log(props.item);
  const moveToFridge = (e) => props.moveToFridge(props.item);
  return (
    <button className="fridge-button" onClick={() => moveToFridge()}>
      {props.children}
    </button>
  );
};

export default FridgeButton;
