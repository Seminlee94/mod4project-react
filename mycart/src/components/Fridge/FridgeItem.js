import React from "react";
import BreadIcon from "./BreadIcon";
import CheeseIcon from "./CheeseIcon";
import PreparedFoodsIcon from "./PreparedFoodsIcon";
import LiquorIcon from "./LiquorIcon";
import MeatIcon from "./MeatIcon";
import OtherIcon from "./OtherIcon";
import SeafoodIcon from "./SeafoodIcon";
import ProduceIcon from "./ProduceIcon";

const FridgeItem = (props) => {
  let icon;

  switch (props.item.category) {
    case "Bread":
      icon = <BreadIcon className="item-icon" />;
      break;
    case "Meat":
      icon = <MeatIcon className="item-icon" />;
      break;
    case "Seafood":
      icon = <SeafoodIcon className="item-icon" />;
      break;
    case "Spirits":
      icon = <LiquorIcon className="item-icon" />;
      break;
    case "Cheese":
      icon = <CheeseIcon className="item-icon" />;
      break;
    case "PreparedFoods":
      icon = <PreparedFoodsIcon className="item-icon" />;
      break;
    case "Produce":
      icon = <ProduceIcon className="item-icon" />;
      break;
    case "Other":
      icon = <OtherIcon className="item-icon" />;
      break;

    default:
      icon = (
        <img
          className="item-image"
          alt={props.item.name}
          src={props.item.image}
        />
      );
      break;
  }

  
  return (
    <div className="fridge-item" onClick={()=>props.deleteItemfromFridge(props.fridgeItem_id)}>
      {icon}
      <div>{props.item.name}</div>
    </div>
  );
};

export default FridgeItem;