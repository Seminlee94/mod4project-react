import React from "react";

const FridgeItem = (props) => {
  return (
    <div>
      {/* <h5 style={{ height: "15%" }}>{props.item.name}</h5> */}
        <img
          className="item-image"
          alt={props.item.name}
          src={props.item.image}
        />
    </div>
  );
};

export default FridgeItem;
