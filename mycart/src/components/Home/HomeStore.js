import React from "react";

class HomeStore extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>{this.props.item.name}</h2>
          <p>
            {/* {props.item.description} */}
            <div className="item-description"></div>
            <img
              className="item-image"
              alt={this.props.item.name}
              src={this.props.item.image}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default HomeStore;
