import React, { Component } from "react";
import HomeStore from "./HomeStore";
// import HomeRecipes from "./HomeRecipes";
import HomeFridge from "./HomeFridge";
import Shelf from "../../components/Shelf";
import { Redirect } from "react-router-dom";

class HomeIndex extends Component {
  fridge = () => {
    return this.props.fridgeItemArray.map((el) => (
      <HomeFridge fridgeItem={el} />
    ));
  };
  // recipe = () => {
  //   return this.props.recipeArray.map((el) => <HomeRecipes recipe={el} />);
  // };
  shop = () => {
    return this.props.shopItemArray.map((el) => <HomeStore item={el} />);
  };

  render() {
    // const itemCount = this.state.itemCount;
    // const itemMapper = this.props.shopItemArray.map(
    //   (item, currentItemIndex) =>
    //     itemCount <= currentItemIndex &&
    //     currentItemIndex < itemCount + 4 && (
    //       <HomeStore
    //         item={item}
    //         rightItemToggle={this.rightItemToggle}
    //         leftItemToggle={this.leftItemToggle}
    //       />
    //     )
    // );
    // // const recipeCount = this.state.recipeCount;
    // // const recipeMapper = this.props.recipeArray.map(
    // //   (recipe, currentItemIndex) =>
    // //     recipeCount <= currentItemIndex &&
    // //     currentItemIndex < recipeCount + 4 && (
    // //       <HomeRecipes
    // //         recipe={recipe}
    // //         rightRecipeToggle={this.rightRecipeToggle}
    // //         leftRecipeToggle={this.leftRecipeToggle}
    // //       />
    // //     )
    // // );
    // const fridgeCount = this.state.fridgeCount;
    // const fridgeMapper = this.props.fridgeItemArray.map(
    //   (fridge, currentItemIndex) =>
    //     fridgeCount <= currentItemIndex &&
    //     currentItemIndex < fridgeCount + 4 && (
    //       <HomeFridge
    //         fridgeItem={fridge}
    //         rightFridgeToggle={this.rightFridgeToggle}
    //         leftFridgeToggle={this.leftFridgeToggle}
    //       />
    //     )
    // );
    // return (
    //   <div className="app">
    //     {fridgeMapper}
    //     {/* {recipeMapper} */}
    //     {itemMapper}
    const frontPageObj = [
      { title: "Fridge", shelf: this.fridge() },
      // { title: "Recipes", shelf: this.recipe() },
      { title: "Shop", shelf: this.shop() },
    ];

    const frontPage = frontPageObj.map(({ title, shelf }) => (
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h1>{title}</h1>
        <Shelf category={shelf} />
      </div>
    ));

    if (typeof this.props.user != "undefined") {

      return <div className="app">{frontPage}</div>;
    } else {
      return (
        <Redirect to="/login" />
      )
    }
  }
}

export default HomeIndex;
