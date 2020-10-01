import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemRightCard from "./ItemRightCard.js";

class ShopRight extends React.Component {
  // cartItems = this.props.cartItemArray.map((element) => element.item);
  clickedItems = () => {
    return this.props.userCartArray.map((cartItem, index) => (
      <ListGroup.Item action>
        <ItemRightCard
          cartId={cartItem.id}
          key={cartItem.item_id}
          item={cartItem.item}
          moveToFridge={this.props.moveToFridge}
          clickedItemIndex={index} //add index back in, it deletes stuff properly in the right
          deleteHandler={this.props.deleteHandler}
        />
      </ListGroup.Item>
    ));
  };

  render() {
    return (
      <div className="shop-right">
        <ListGroup>{this.clickedItems()}</ListGroup>
      </div>
    );
  }
}

export default ShopRight;
