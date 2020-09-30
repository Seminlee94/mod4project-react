import React from "react";
import Card from "react-bootstrap/Card";

class RightRecipeDisplay extends React.Component {
  state = { missing: "" };
  //filter for ingredients inside of fridge that are not included

  //for loop set everything to a string to lowercase
  missingIngredients = () => {
    let missingIngredientsArray = this.props.fridgeContent.filter(
      (fridgeIngred) => console.log(fridgeIngred.name)
    );
    // this.setState({ missing: missingIngredientsArray });
  };

  // .toLowerCase()
  // .includes(!this.props.recipe.ingredients.toLowerCase())
  // || !this.props.recipe.ingredients.sub_category.toLowerCase()
  missingIngredientMap = () => {
    let currentState = this.state.missing;
    console.log("currentState:", currentState);
    console.log("fridgeContent:", this.props.fridgeContent);
    console.log(
      "props",
      this.props.recipe.ingredients,
      this.props.recipe.id,
      this.props.recipe.title
      // currentState.map((element)=><p>element. </p>)
    );
  };

  render() {
    return (
      <Card
        style={{
          width: "800px",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <Card.Img
          style={{ height: "550px", objectFit: "cover", width: "100%" }}
          src={this.props.recipe.picture}
          alt={this.props.recipe.title}
        />
        <Card.ImgOverlay>
          <div
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              color: "rgba(255, 255, 255, 1.0)",
              position: "absolute",
              bottom: "0px",
              left: "0px",
            }}
          >
            {/* {this.missingIngredients()} */}
          </div>
        </Card.ImgOverlay>
        {/* {this.missingIngredients()} */}
      </Card>
    );
  }
}
export default RightRecipeDisplay;
