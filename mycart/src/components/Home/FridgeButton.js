import React from "react";
import Button from "react-bootstrap/Button";

const FridgeButton = (props) => {
  const onClick = (e) => {
    return props.moveToFridge(props.item, props.clickedItemIndex);
  };

  return (
    // <button className="fridge-button"
    //         onClick={onClick}
    //         style={{ height:"50px" }}>{props.children}</button>
    <>
      <Button variant="info" onClick={onClick}>
        Add to Fridge
      </Button>
      <Button variant="success" onClick={onClick}>
        Add to Checkout
      </Button>
    </>
  );
};

export default FridgeButton;
