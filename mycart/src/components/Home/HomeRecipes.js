import React from "react";

class HomeRecipes extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.recipe.name}</h2>
        <p>
          <div className="item-description"></div>
          <img
            className="item-image"
            alt={this.props.recipe.name}
            src={this.props.recipe.picture}
          />
        </p>
      </div>
    );
  }
}

export default HomeRecipes;
