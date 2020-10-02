import React from "react";

class Search extends React.Component {
  inputHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(e.target.value);
  };
  render() {
    return (
      <form className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search Item"
          value={this.props.searchValue}
          onChange={this.inputHandler}
        ></input>
      </form>
    );
  }
}
export default Search;
