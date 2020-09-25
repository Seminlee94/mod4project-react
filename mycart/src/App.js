import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomeIndex from "./containers/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Search from "./components/Home/Search.js";
import TempIndex from "./containers/TempIndex.js";
import Fridge from "./containers/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";

class App extends Component {
  state = {
    itemArray: [],
    searchValue: "",
<<<<<<< HEAD
    fridgeItemArray: [],
  };
=======
    fridgeItemArray: []
    // displayIndex: 0
  }
>>>>>>> 02b914844fad5866557dbd6ef6eda05494f32b58

  componentDidMount() {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => this.setState({ itemArray: data }));
  }

  componentWillMount() {
    fetch("http://localhost:8000/fridge-items")
      .then((resp) => resp.json())
      .then((data) => this.setState({ fridgeItemArray: data[0].items }));
  }
<<<<<<< HEAD
=======
 
  // renderFourItems = () => {
  //   return this.state.fridgeItemArray.slice(this.state.displayIndex, this.state.displayIndex+4)
  // }

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4

    //bonus
    if(newDisplayIndex >= this.state.fridgeItemArray.length){
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }
>>>>>>> 02b914844fad5866557dbd6ef6eda05494f32b58

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
    console.log("settingSearch:", this.state.searchValue);
  };

  showItemArray = () => {
    return this.state.searchValue === ""
      ? this.state.itemArray
      : this.state.itemArray.filter(
          (item) =>
            item.name
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()) ||
            item.description
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
        );
  };

  render() {
    return (
      <div
        className="App"
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Router>
          <Navbar />

          <Switch class="header-switch">
            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/fridge">
              <Fridge item={this.state.fridgeItemArray} />
<<<<<<< HEAD
            </Route>
=======
              {/* <Fridge item={this.renderFourItems()} more={this.more} /> */}
          </Route>
>>>>>>> 02b914844fad5866557dbd6ef6eda05494f32b58

            <Route path="/friends">
              <Friends />
            </Route>

            <Route path=""></Route>
          </Switch>
        </Router>
        <Search
          className="searchBar"
          searchValue={this.state.searchValue}
          search={this.search}
        />
        <HomeIndex
          className="temporary-search-index"
          itemArray={this.showItemArray()}
        />
      </div>
    );
    // render() {
    //   return (
    //     <div className="app">
    //       <Navbar />
    //       <HomeIndex />
    //     </div>
    //   );
  }
}

export default App;
