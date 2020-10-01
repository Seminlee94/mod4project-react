import React from "react";
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
import Shelf from "../components/Shelf";
import { Redirect } from "react-router-dom";

class Fridge extends React.Component {
  // state = {

  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users")
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ userArray: data }))
  // }

  filter = (Category) => {
    let filteredItems = this.props.item.filter(
      (item) => item.category === Category
    );
    return filteredItems.map((el) => <FridgeItem item={el} />);
  };

  render() {
    const fridgeCategories = [
      { category: "Bakery", shelf: this.filter("Bread") },
      { category: "Produce", shelf: this.filter("Produce") },
      { category: "Meat", shelf: this.filter("Meat") },
      { category: "Seafood", shelf: this.filter("Seafood") },
      { category: "Liqours", shelf: this.filter("Liquors") },
      {
        category: "PreparedFoods",
        shelf: this.filter("PreparedFoods"),
      },
      { category: "Other", shelf: this.filter("Other") },
      { category: "Cheese", shelf: this.filter("Cheese") },
    ];

    const fridge = fridgeCategories.map(
      ({ category, shelf }) =>
        // If there are no items on this shelf, don't show it
        shelf.length > 0 && (
          <div className="fridge-shelf">
            <h3>{category}</h3>
            <Shelf category={shelf} />
          </div>
        )
    );

    return (
      <div className="fridge-container">
        <h1>My Fridge</h1>
        {fridge}
      </div>
    );


  }
}
export default Fridge;
