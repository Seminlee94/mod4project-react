import React from "react";
import Card from "react-bootstrap/Card";

class HomeStore extends React.Component {
  render() {
    return (
      <Card style={{ marginRight: "5px", marginLeft: "5px", width: "200px" }}>
        <Card.Img
          alt={this.props.item.name}
          src={this.props.item.image}
          style={{ width: "100%" }}
        />

        <Card.Body> {this.props.item.name}</Card.Body>
      </Card>
    );
  }
}

export default HomeStore;
