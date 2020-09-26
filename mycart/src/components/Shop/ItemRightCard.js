import React from "react";
import FridgeButton from "../Home/FridgeButton";

const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      {/* <img src={props.item.image}/> */}
      <strong>
        <p>${props.item.price}</p>
      </strong>
      <p>{props.item.name}</p>
      <FridgeButton moveToFridge={props.moveToFridge} item={props.item.id}>
        Move To Fridge
      </FridgeButton>
    </div>
  );
};

export default ItemRightCard;
