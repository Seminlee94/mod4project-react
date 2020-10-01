import React from "react";

const FridgeItem = (props) => {
  return (
    <div className="fridge-item">
      <img
        className="item-image"
        alt={props.item.name}
        src={props.item.image}
      />
    </div>
  );
};

export default FridgeItem;
