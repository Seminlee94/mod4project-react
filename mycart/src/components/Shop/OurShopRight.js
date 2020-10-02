import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import OurItemRightCard from "./OurItemRightCard.js";

class OurShopRight extends React.Component {
  // cartItems = this.props.cartItemArray.map((element) => element.item);
  clickedItems = () => {
    return this.props.ourCartArray.map((cartItem) => (
        cartItem.cart.cart_item.map((cartObj, index) => (
            <ListGroup.Item action>
                <OurItemRightCard
                cartId={cartObj.id}
                key={cartObj.id}
                item={cartObj}
                addToFridge={this.props.addToFridge}
                clickedItemIndex={index} //add index back in, it deletes stuff properly in the right
                deleteHandler={this.props.deleteHandler}
                />
            </ListGroup.Item>
        ))
    ));
  };

  render() {
    return (
      <div className="our-shop-right">
        <ListGroup>{this.clickedItems()}</ListGroup>
      </div>
    );
  }
}

export default OurShopRight;
