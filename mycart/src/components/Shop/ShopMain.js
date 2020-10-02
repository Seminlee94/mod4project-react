import React from "react";
import ItemCard from "./ItemCard.js";
import Search from "./Search.js";

class ShopMain extends React.Component {
  state = {
    searchTerm: "",
  };

  items = () => {
    return this.props.item.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        itemClickHandler={this.props.itemClickHandler}
      />
    ));
  };

  itemArray = () => {
    return this.props.itemArray.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        itemClickHandler={this.props.itemClickHandler}
      />
    ));
  };

  showItemArray() {
    let findItems = this.props.itemArray.filter(
      (item) =>
        item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        item.sub_category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );

    return findItems.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        itemClickHandler={this.props.itemClickHandler}
      />
    ));
  }

  submitHandler = (searchValue) => {
    this.setState({
      searchTerm: searchValue,
    });
  };

  render() {
    return (
      <div className="shop-main">
        <div className="item-search">
          <Search
            className="searchBar"
            searchValue={this.state.searchTerm}
            submitHandler={this.submitHandler}
          />
        </div>
        <div className="item-container">
          {this.state.searchTerm === "" && this.props.clicked === false
            ? this.itemArray()
            : null}
          {this.state.searchTerm === "" ? this.items() : this.showItemArray()}
        </div>
      </div>
    );
  }
}

export default ShopMain;
