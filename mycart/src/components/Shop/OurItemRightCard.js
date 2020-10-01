import React from "react";
import FridgeButton from "../Home/FridgeButton";

const OurItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <button onClick={()=>props.deleteHandler(props.cartId, props.item.item.id)}>X</button>
      <img 
        src={props.item.item.image}
        alt={props.item.item.name}
        style={{ width:"70px", height:"50px" }}  />
      <div 
        className="item-right-price">
        ${props.item.item.price}
      </div>
      <FridgeButton
        moveToFridge={props.moveToFridge}
        item={props.item.item.id}
        clickedItemIndex={props.clickedItemIndex}
        //clickeditem index needs to come back or multiple items of the same ID will delete off the rightside if you press add to fridge
      /> 


    </div>
  );
};

export default OurItemRightCard;
