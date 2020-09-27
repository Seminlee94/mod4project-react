import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./containers/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";

class App extends Component {
  state = {
    itemArray: [],
    fridgeItemArray: [],
    clickedArray: [],
    recipeArray: [],
  };

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

  moveToFridge = (id, clickedItemIndex) => {
    // Copy the object, so that we don't change any places it's being referenced
    let foundObj = {
      ...this.state.itemArray.find((el) => el.id === parseInt(id)),
    };
    delete foundObj.id; //deletes the store ID, letting newObj create new ID for fridgeitem so we don't get conflicts when trying to post
    fetch("http://localhost:8000/fridge-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(foundObj),
    })
      .then((res) => res.json())
      .then((newObj) => {
        const updatedArray = this.state.clickedArray.filter(
          (item, index) => index !== clickedItemIndex
        );

        this.setState({
          fridgeItemArray: [...this.state.fridgeItemArray, newObj],
          clickedArray: updatedArray,
        });
      });
  };

  itemClickHandler = (id) => {
    let newArray = this.state.clickedArray;
    let foundObj = this.state.itemArray.find((el) => el.id === parseInt(id));
    this.setState(() => ({
      clickedArray: [...newArray, foundObj],
    }));
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
          overflow: "scroll",
        }}
      >
        <Router>
          <Navbar />

          <Switch class="header-switch">
            <Route path="/shop">
              <Shop
                itemArray={this.state.itemArray}
                moveToFridge={this.moveToFridge}
                clickedArray={this.state.clickedArray}
                itemClickHandler={this.itemClickHandler}
              />
            </Route>

            <Route path="/fridge">
              <Fridge item={this.state.fridgeItemArray} />
            </Route>

            <Route path="/friends">
              <Friends />
            </Route>

            <Route path="/">
              <HomeIndex
                className="temporary-search-index"
                fridgeItemArray={this.state.fridgeItemArray}
                shopItemArray={this.state.itemArray}
                recipeArray={this.state.recipeArray}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
