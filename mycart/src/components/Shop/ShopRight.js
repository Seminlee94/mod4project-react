import React from "react";
import ItemRightCard from "./ItemRightCard.js";

class ShopRight extends React.Component {
  //props returns clickedItemArray properly
  //wont render itemrightcard
  // console.log("shopRighttab props:", this.props);
  clickedItems = () => {
    return this.props.itemClickedArray.map((clickedItem, index) => (
      <ItemRightCard
        key={clickedItem.id}
        item={clickedItem}
        moveToFridge={this.props.moveToFridge}
        clickedItemIndex={index}
      />
    ));
  };

  render() {
    return (
      <div className="shop-right">
        <h3>{this.clickedItems()}</h3>
      </div>
    );
  }
}

export default ShopRight;
