import React from "react";
import Card from "react-bootstrap/Card";

class HomeFridge extends React.Component {
  render() {
    return (
      <Card style={{ marginRight: "5px", marginLeft: "5px", width: "200px" }}>
        <Card.Img
          variant="top"
          alt={this.props.fridgeItem.item.name}
          src={this.props.fridgeItem.item.image}
          style={{ width: "100%" }}
        />
        <Card.Body>{this.props.fridgeItem.item.name}</Card.Body>
      </Card>
    );
  }
}

export default HomeFridge;
