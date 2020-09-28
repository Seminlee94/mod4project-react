import React, { Component } from "react";
import HomeStore from "./HomeStore";
import HomeRecipes from "./HomeRecipes";
import HomeFridge from "./HomeFridge";

class HomeIndex extends Component {
  state = {
    catCount: 0,
  };
  // moreItems = () => {
  //   this.setState({ catCount: this.state.catCount + 4 });
  // };
  // leftItems = () => {
  //   this.setState({ catCount: this.state.catCount - 4 });
  // };
  render() {
    return (
      <div className="app">
        <HomeStore
          shopItemArray={this.props.shopItemArray}
          fridgeItemArray={this.props.fridgeItemArray}
          recipeArray={this.props.recipeArray}
          // catCount={this.state.catCount}
          // moreItems={this.moreItems}
          // leftItems={this.leftItems}
        />
        <HomeFridge />
        <HomeRecipes />
      </div>
    );
  }
}

export default HomeIndex;
