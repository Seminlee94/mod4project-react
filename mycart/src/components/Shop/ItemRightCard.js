import React from "react";
// import FridgeButton from "../Home/FridgeButton";
import Button from "react-bootstrap/Button";

const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <button onClick={() => props.deleteHandler(props.cartId, props.item.id)}>
        X
      </button>
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{ width: "70px", height: "50px" }}
      />
      <div className="item-right-price">${props.item.price}</div>
      
      <Button
        onClick={ () => props.addToFridge(props.cartId, props.item.id) }
        item={props.item.id}
        variant="info"
        style={{ marginRight: "5px" }}
        //clickeditem index needs to come back or multiple items of the same ID will delete off the rightside if you press add to fridge
      >
        Add to Fridge
      </Button>
      
    </div>
  );
};

export default ItemRightCard;
