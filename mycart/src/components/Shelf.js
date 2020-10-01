import React from "react";
// import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
import MoreButton from "../components/Home/MoreButton.js";

class Shelf extends React.Component {
  state = {
    displayIndex: 0,
  };
  next = (event) => {
    this.setState({
      displayIndex: this.state.displayIndex + 4,
    });
  };
  prev = (event) => {
    this.setState({
      displayIndex: this.state.displayIndex - 4,
    });
  };

  render() {
    const categoryArray = this.props.category;
    return (
      <div className="fridge-item-card">
        <div className="fridge-shelf-button">
          {this.state.displayIndex !== 0 && (
            <MoreButton moreItems={this.prev}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-left-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"
                />
              </svg>
            </MoreButton>
          )}
        </div>
        {categoryArray.slice(
          this.state.displayIndex,
          this.state.displayIndex + 4
        )}
        <div className="fridge-shelf-button">
          {categoryArray.length > this.state.displayIndex + 4 && (
            <MoreButton moreItems={this.next}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-arrow-right-circle-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"
                />
              </svg>
            </MoreButton>
          )}
        </div>
      </div>
    );
  }
}

export default Shelf;
