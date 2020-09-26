import React from "react";

const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      {/* <img src={props.item.image}/> */}
      {/* <strong><p>${props.item.price}</p></strong> */}
      <p>{props.item.name}</p>
    </div>
  );
};

export default ItemRightCard;
