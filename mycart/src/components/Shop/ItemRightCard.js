import React from "react";
import FridgeButton from "../Home/FridgeButton";
import TrashCan from "../Fridge/trashcan.js";
const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <button onClick={() => props.deleteHandler(props.cartId, props.item.id)}>
        {<TrashCan />}
      </button>
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{ width: "70px", height: "50px" }}
      />
      <div className="item-right-price">${props.item.price}</div>
      <FridgeButton
        moveToFridge={props.moveToFridge}
        item={props.item.id}
        clickedItemIndex={props.clickedItemIndex}
        //clickeditem index needs to come back or multiple items of the same ID will delete off the rightside if you press add to fridge
      />
    </div>
  );
};

export default ItemRightCard;
