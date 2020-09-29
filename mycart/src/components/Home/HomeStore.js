import React from "react";
import Card from "react-bootstrap/Card";

class HomeStore extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          className="item-image"
          alt={this.props.item.name}
          src={this.props.item.image}
          style={{ width: "200px" }}
        />

        <Card.Body> {this.props.item.name}</Card.Body>
      </Card>
    );
  }
}

export default HomeStore;
