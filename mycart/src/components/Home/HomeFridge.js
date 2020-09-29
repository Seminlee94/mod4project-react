import React from "react";
import Card from "react-bootstrap/Card";

class HomeFridge extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          alt={this.props.fridgeItem.name}
          src={this.props.fridgeItem.image}
          style={{ width: "200px" }}
        />
        <Card.Body>{this.props.fridgeItem.name}</Card.Body>
      </Card>
    );
  }
}

export default HomeFridge;
