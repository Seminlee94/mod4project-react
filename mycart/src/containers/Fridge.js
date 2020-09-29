import React from "react";
import { Redirect } from "react-router-dom";
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
import Shelf from "../components/Shelf";

class Fridge extends React.Component {
  filter = (Category) => {
    let filteredItems = this.props.item.filter(
      (item) => item.category === Category
    );
    return filteredItems.map((el) => <FridgeItem item={el} />);
  };

  render() {
    const fridgeLeftArray = [
      { category: "Bakery", shelf: this.filter("Bread") },
      { category: "Produce", shelf: this.filter("Produce") },
      { category: "Meat", shelf: this.filter("Meat") },
      { category: "Seafood", shelf: this.filter("Seafood") },
    ];
    const fridgeRightArray = [
      // { category: "Liqours", shelf: this.filter("Liqours") },
      {
        category: "PreparedFoods",
        shelf: this.filter("PreparedFoods"),
      },
      { category: "Other", shelf: this.filter("Other") },
      { category: "Cheese", shelf: this.filter("Cheese") },
    ];
    const fridgeLeft = fridgeLeftArray.map(({ category, shelf }) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));
    const fridgeRight = fridgeRightArray.map(({ category, shelf }) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));

    console.log("current user:", this.props.user)
    return (

      <>
        {this.props.user ? 

            <div className="fridge-container">
            <div className="fridge-container-left">{fridgeLeft}</div>
    
            <div className="fridge-blank"></div>
    
            <div className="fridge-container-right">{fridgeRight}</div>
          </div>
        
        :
        
         <Redirect to="/" />
        
        }

      </>
    );
  }
}
export default Fridge;
