import { render } from "@testing-library/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Recipe from "./Recipe";
import RightRecipeDisplay from "./RightRecipeDisplay";

class RecipeMain extends React.Component {
  state = {
    name: "",
    image: "",
    description: 0,
    ingredients: "",
    displayedRecipe: null,
  };

  recipeSubmitHandler = (e) => {
    e.preventDefault();
    this.props.recipeSubmit(this.state);
    this.setState({
      name: "",
      image: "",
      url: "",
      ingredients: "",
      displayedRecipe: null,
    });
  };

  recipeFormHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  recipeClickListener = (obj) => {
    this.setState({ displayedRecipe: obj });
  };

  allRecipes = () =>
    this.props.recipes.map((el) => (
      <Recipe recipe={el} recipeClickListener={this.recipeClickListener} />
    ));

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", width: "80%" }}>{this.allRecipes()}</div>
        <div>
          {/* <div>
          <form onSubmit={this.recipeSubmitHandler}>
            <input
              type="text"
              placeholder="Recipe Name"
              name="name"
              value={this.state.name}
              onChange={this.recipeFormHandler}
            />
            <br />
            <input
              type="text"
              placeholder="Recipe Image"
              name="image"
              value={this.state.image}
              onChange={this.recipeFormHandler}
            />
            <br />
            <input
              type="text"
              placeholder="Recipe URL-Bookmark"
              name="url"
              value={this.state.url}
              onChange={this.recipeFormHandler}
            />
            <br />
            <input
              type="text"
              placeholder="Recipe Ingredients"
              name="ingredients"
              value={this.state.ingredients}
              onChange={this.recipeFormHandler}
            />
            <br />
            <input type="submit" name="submit" />
          </form>
        </div> */}
          {this.state.displayedRecipe && (
            <RightRecipeDisplay recipe={this.state.displayedRecipe} />
          )}
        </div>
      </div>
    );
  }
}
export default RecipeMain;
