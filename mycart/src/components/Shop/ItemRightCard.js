import React from "react";
import FridgeButton from "../Home/FridgeButton";
import TrashCan from "../Fridge/trashcan.js";
const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{ width: "70px", height: "50px", marginLeft: "5px" }}
      />
      <div className="item-right-price">${props.item.price}</div>
      <FridgeButton
        moveToFridge={props.moveToFridge}
        item={props.item.id}
        clickedItemIndex={props.clickedItemIndex}
        //clickeditem index needs to come back or multiple items of the same ID will delete off the rightside if you press add to fridge
      />
      <button onClick={() => props.deleteHandler(props.cartId, props.item.id)}>
        {<TrashCan style={{ height: "20", width: "20" }} />}
      </button>
    </div>
  );
};

export default ItemRightCard;
