import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

class HomeRecipes extends React.Component {
  render() {
    return (
      <Card
        onClick={this.props.onClick}
        style={{ marginRight: "5px", marginLeft: "5px", width: "200px" }}
      >
        <Card.Img
          alt={this.props.recipe.title}
          src={this.props.recipe.picture}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <Card.Body>{this.props.recipe.title}</Card.Body>
      </Card>
    );
  }
}

export default HomeRecipes;
