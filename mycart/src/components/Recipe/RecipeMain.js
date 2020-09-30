import { render } from "@testing-library/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import Recipe from "./Recipe";
import RightRecipeDisplay from "./RightRecipeDisplay";
import RecipeForm from "./RecipeForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class RecipeMain extends React.Component {
  state = {
    displayedRecipe: null,
    modalShow: false,
  };

  recipeClickListener = (obj) => {
    this.setState({ displayedRecipe: obj });
  };

  allRecipes = () =>
    this.props.recipes.map((el) => (
      <Recipe recipe={el} recipeClickListener={this.recipeClickListener} />
    ));

  setModalShow = (boop) => {
    this.setState({ modalShow: boop });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            flexWrap: "wrap",
            marginTop: "35px",
            marginLeft: "45px",
          }}
        >
          {this.allRecipes()}
        </div>
        <div style={{ top: "0px", position: "sticky" }}>
          {this.state.displayedRecipe && (
            <RightRecipeDisplay recipe={this.state.displayedRecipe} />
          )}
          <div>
            {/* <RecipeForm recipeSubmit={() => {}} /> */}
            <Button variant="primary" onClick={() => this.setModalShow(true)}>
              Add a Recipe
            </Button>

            <RecipeForm
              show={this.state.modalShow}
              onHide={() => this.setModalShow(false)}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default RecipeMain;
