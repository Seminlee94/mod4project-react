import React, { Component } from "react";
import HomeStore from "./HomeStore";
import HomeRecipes from "./HomeRecipes";
import HomeFridge from "./HomeFridge";
import Shelf from "../../components/Shelf";
import { Redirect } from "react-router-dom";

class HomeIndex extends Component {
  fridge = () => {
    return this.props.fridgeItemArray.map((el) => (
      <HomeFridge fridgeItem={el} />
    ));
  };
  recipe = () => {
    return this.props.recipeArray.map((el) => <HomeRecipes recipe={el} />);
  };
  shop = () => {
    return this.props.shopItemArray.map((el) => <HomeStore item={el} />);
  };

  render() {

    const frontPageObj = [
      { title: "Fridge", shelf: this.fridge() },
      { title: "Recipes", shelf: this.recipe() },
      { title: "Shop", shelf: this.shop() },
    ];

    const frontPage = frontPageObj.map(({ title, shelf }) => (
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h1>{title}</h1>
        <Shelf category={shelf} />
      </div>
    ));


      return (
        <>

          {this.props.userId
          
          ?

            <div className="app">{frontPage}</div>
        
          :
            
            <Redirect to="/login" />
          
          }


        </>

    )
  }
}

export default HomeIndex;
