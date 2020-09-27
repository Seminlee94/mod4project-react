import React, { Component } from "react";
import Search from "../components/Home/Search.js";
import TempIndex from "../containers/TempIndex";

class HomeIndex extends Component {
  state = {
    itemArray: [],
    searchValue: "",
    catCount: 0,
  };

  componentDidMount() {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => this.setState({ itemArray: data }));
  }

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
  };

  showItemArray() {
    return this.state.searchValue === ""
      ? this.state.itemArray
      : this.state.itemArray.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            item.category
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            item.sub_category
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
        );
  }
  moreItems = () => {
    this.setState({ catCount: this.state.catCount + 4 });
  };
  leftItems = () => {
    this.setState({ catCount: this.state.catCount - 4 });
  };
  render() {
    return (
      <div className="app">
        {
          <Search
            className="searchBar"
            searchValue={this.state.searchValue}
            search={this.search}
          />
        } 
        <TempIndex
          className="temporary-search-index"
          itemArray={this.showItemArray()}
          catCount={this.state.catCount}
          moreItems={this.moreItems}
          leftItems={this.leftItems}
        />
      </div>
    );
  }
}

export default HomeIndex;
