import React from "react";
import Card from "react-bootstrap/Card";

class ItemCard extends React.Component {
  state = {
    mouseOver: false,
  };

  onMouseOver = () => {
    this.setState({
      mouseOver: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      mouseOver: false,
    });
  };

  render() {
    //all the items
    return (
      <Card
        style={{ cursor: "pointer"}}
        onClick={() => this.props.itemClickHandler(this.props.item)}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        border={this.state.mouseOver ? "primary" : "light"}
      >
        <Card.Img variant="top" src={this.props.item.image} />
        <Card.Body>
          <Card.Title>{this.props.item.name}</Card.Title>
          {/* <Card.Text text="primary" className="item-card-price">
            ${this.props.item.price}
          </Card.Text> */}
        </Card.Body>
      </Card>
    );
  }
}

export default ItemCard;
