import React from "react";
import Card from "react-bootstrap/Card";

class RecipeForm extends React.Component {
  state = {
    name: "",
    image: "",
    url: "",
    ingredients: "",
  };

  recipeSubmitHandler = (e) => {
    e.preventDefault();
    this.props.recipeSubmit(this.state);
    this.setState({
      name: "",
      image: "",
      url: "",
      ingredients: "",
    });
  };

  recipeFormHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Card
        style={{
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <Card.Header>Add a new recipe</Card.Header>
        <Card.Body>
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
        </Card.Body>
      </Card>
    );
  }
}
export default RecipeForm;
