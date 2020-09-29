import React, { Component } from "react";
import HomeStore from "./HomeStore";
// import HomeRecipes from "./HomeRecipes";
import HomeFridge from "./HomeFridge";

class HomeIndex extends Component {
  state = {
    itemCount: 0,
    recipeCount: 0,
    fridgeCount: 0,
  };

  rightItemToggle = () => {
    this.setState({ itemCount: this.state.itemCount + 4 });
  };
  leftItemToggle = () => {
    this.setState({ itemCount: this.state.itemCount - 4 });
  };
  rightRecipeToggle = () => {
    this.setState({ recipeCount: this.state.recipeCount + 4 });
  };
  leftRecipeToggle = () => {
    this.setState({ recipeCount: this.state.recipeCount - 4 });
  };
  rightFridgeToggle = () => {
    this.setState({ fridgeCount: this.state.fridgeCount + 4 });
  };
  leftFridgeToggle = () => {
    this.setState({ fridgeCount: this.state.fridgeCount - 4 });
  };

  render() {
    const itemCount = this.state.itemCount;
    const itemMapper = this.props.shopItemArray.map(
      (item, currentItemIndex) =>
        itemCount <= currentItemIndex &&
        currentItemIndex < itemCount + 4 && (
          <HomeStore
            item={item}
            rightItemToggle={this.rightItemToggle}
            leftItemToggle={this.leftItemToggle}
          />
        )
    );
    // const recipeCount = this.state.recipeCount;
    // const recipeMapper = this.props.recipeArray.map(
    //   (recipe, currentItemIndex) =>
    //     recipeCount <= currentItemIndex &&
    //     currentItemIndex < recipeCount + 4 && (
    //       <HomeRecipes
    //         recipe={recipe}
    //         rightRecipeToggle={this.rightRecipeToggle}
    //         leftRecipeToggle={this.leftRecipeToggle}
    //       />
    //     )
    // );
    const fridgeCount = this.state.fridgeCount;
    const fridgeMapper = this.props.fridgeItemArray.map(
      (fridge, currentItemIndex) =>
        fridgeCount <= currentItemIndex &&
        currentItemIndex < fridgeCount + 4 && (
          <HomeFridge
            fridgeItem={fridge}
            rightFridgeToggle={this.rightFridgeToggle}
            leftFridgeToggle={this.leftFridgeToggle}
          />
        )
    );
    return (
      <div className="app">
        {fridgeMapper}
        {/* {recipeMapper} */}
        {itemMapper}
      </div>
    );
  }
}

export default HomeIndex;
