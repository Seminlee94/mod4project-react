import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemRightCard from "./ItemRightCard.js";

class ShopRight extends React.Component {
  //props returns clickedItemArray properly
  //wont render itemrightcard
  // console.log("shopRighttab props:", this.props);
  // clickedItems = () => {
  //   return this.props.itemClickedArray.map((clickedItem, index) => (
  //     <ItemRightCard
  //       key={clickedItem.id}
  //       item={clickedItem}
  //       moveToFridge={this.props.moveToFridge}
  //       clickedItemIndex={index}
  //     />
  //   ));
  // };
  clickedItems = () => {
    return this.props.itemClickedArray.map(cartitem=> <ItemRightCard key={cartitem.item.id} item={cartitem.item} /> )
    // return this.props.itemClickedArray.map((clickedItem, index) => (
    //   <ListGroup.Item action>
    //     <ItemRightCard
    //       key={clickedItem.id}
    //       item={clickedItem}
    //       moveToFridge={this.props.moveToFridge}
    //       clickedItemIndex={index}
    //     />
    //   </ListGroup.Item>
    // ));
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
