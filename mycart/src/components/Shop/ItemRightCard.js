import React from "react";
import FridgeButton from "../Home/FridgeButton";

const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <button onClick={()=>props.deleteHandler(props.cartId, props.item.id)}>X</button>
      <img 
        src={props.item.image}
        alt={props.item.name}
        style={{ width:"70px", height:"50px" }}  />
      <div 
        className="item-right-price">
        ${props.item.price}
      </div>
      <FridgeButton
        moveToFridge={props.moveToFridge}
        item={props.item.id}
        clickedItemIndex={props.clickedItemIndex}
      /> 


    </div>
  );
};

export default ItemRightCard;
