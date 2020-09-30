import React from "react";
import Card from "react-bootstrap/Card";

class RightRecipeDisplay extends React.Component {
  state = { missing: "" };
  // const missingIngredients = props.fridgeContent.filter(ing => ing.name.toLowerCase().includes(!props.ingredients)

  //   cardMissingIngredients = () => {
  //     let missingIngredients = this.props.fridgeContent.filter(
  //       (ing) =>
  //         ing.name
  //           .toLowerCase()
  //           .includes(!this.props.ingredients.name.toLowerCase()) ||
  //         !this.props.ingredients.sub_category.toLowerCase()
  //     );
  //     this.setState({ missing: missingIngredients });
  //   };
  render() {
    console.log(this.state.missing);
    return (
      <Card
        style={{
          width: "800px",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <Card.Img
          style={{ height: "600px", objectFit: "cover", width: "100%" }}
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
            {this.props.recipe.title}
            {this.cardMissingIngredients}
            {this.state.missing}
          </div>
        </Card.ImgOverlay>
        Missing Ingredients
      </Card>
    );
  }
}

export default RightRecipeDisplay;
