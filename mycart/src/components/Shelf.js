import React from "react";
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
import MoreButton from "../components/Home/MoreButton.js";

class Shelf extends React.Component {
  state = {
    displayIndex: 0,
  };
  next = (event) => {
    this.setState({
      displayIndex: this.state.displayIndex + 4,
    });
  };
  prev = (event) => {
    this.setState({
      displayIndex: this.state.displayIndex - 4,
    });
  };

  render() {
    const categoryArray = this.props.category;
    return (
      <div className="fridge-item-card">
        {this.state.displayIndex !== 0 && (
          <MoreButton moreItems={this.prev}>previous</MoreButton>
        )}
        {categoryArray.slice(
          this.state.displayIndex,
          this.state.displayIndex + 4
        )}
        {categoryArray.length > this.state.displayIndex + 4 && (
          <MoreButton moreItems={this.next}>next</MoreButton>
        )}
      </div>
    );
  }
}

export default Shelf;
