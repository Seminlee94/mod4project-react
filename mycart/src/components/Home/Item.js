import React, { Fragment } from "react";

const Item = (props) => {
  return (
    <Fragment>
      <h2>{props.item.name}</h2>
      <p>
        {/* {props.item.description} */}
        <div className="item-description"></div>
        <img
          className="item-image"
          alt={props.item.name}
          src={props.item.image}
        />
      </p>
    </Fragment>
  );
};

export default Item;
