import React from "react";

class HomeFridge extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.fridgeItem.name}</h2>
        <p>
          {/* {props.item.description} */}
          <div className="item-description"></div>
          <img
            className="item-image"
            alt={this.props.fridgeItem.name}
            src={this.props.fridgeItem.image}
          />
        </p>
      </div>
    );
  }
}

export default HomeFridge;
