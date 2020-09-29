import { render } from "@testing-library/react";
import React from "react";
import Recipe from "./Recipe";

class RecipeMain extends React.Component {
  state = {
    name: "",
    image: "",
    description: 0,
    ingredients: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.recipeSubmit(this.state);
    this.setState({
      name: "",
      image: "",
      url: "",
      ingredients: "",
    });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  recipes = () => this.props.recipes.map((el) => <Recipe recipe={el} />);

  render() {
    return (
      <div>
        {this.recipes()}
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Recipe Name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Recipe Image"
            name="image"
            value={this.state.image}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Recipe URL-Bookmark"
            name="url"
            value={this.state.url}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            placeholder="Recipe Ingredients"
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </div>
    );
  }
}
export default RecipeMain;
