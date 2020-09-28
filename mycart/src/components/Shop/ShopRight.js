import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemRightCard from "./ItemRightCard.js";

class ShopRight extends React.Component {
  clickedItems = () => {
    return this.props.cartItemArray.map((cartItem, index) => (
      <ListGroup.Item action>
        <ItemRightCard
          key={cartItem.item.id}
          item={cartItem.item}
          moveToFridge={this.props.moveToFridge}
          // clickedItemIndex={index}
        />
      </ListGroup.Item>
    ));
  };

  render() {
    return (
      <div className="shop-right">
        <h3>Cart</h3>
        <ListGroup>{this.clickedItems()}</ListGroup>;
      </div>
    );
  }
}

export default ShopRight;
