import React from "react";

const FridgeButton = (props) => {

  const onClick = (e) => {
    return props.moveToFridge(props.item, props.clickedItemIndex);
  };

  return (
      // <button className="fridge-button" 
      //         onClick={onClick} 
      //         style={{ height:"50px" }}>{props.children}</button>
      <>
        <button className="fridge-button" 
                onClick={onClick} >Add to Fridge</button>
        <button className="fridge-button" 
                onClick={onClick} >Add to Checkout</button>
      </>
  );
};

export default FridgeButton;
