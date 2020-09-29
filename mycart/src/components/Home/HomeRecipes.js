import React from "react";
import Card from "react-bootstrap/Card";

class HomeRecipes extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          alt={this.props.recipe.title}
          src={this.props.recipe.picture}
          style={{ width: "200px" }}
        />
        <Card.Body>{this.props.recipe.title}</Card.Body>
      </Card>
    );
  }
}

export default HomeRecipes;
