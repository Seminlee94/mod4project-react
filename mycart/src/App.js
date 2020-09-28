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
    shopItemArray: [],
    fridgeItemArray: [],
    recipeArray: [],
    cartItemArray: [],
    user: null
  };

  componentDidMount() {
    const urls = [
      "http://localhost:3000/items",
      "http://localhost:3000/fridge-items",
      "http://localhost:3000/recipes",
      "http://localhost:3000/user_carts/1",
    ];
    // const promises = urls.map((url) => fetch(url));
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (data) =>
        this.setState({
          shopItemArray: data[0],
          fridgeItemArray: data[1],
          recipeArray: data[2],
          cartItemArray: data[3].cart.cart_item,
        })
    );
    //cartItemArray needs testing, haven't pulled updated db.json
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
        const updatedArray = this.state.cartItemArray.filter(
          (item, index) => index !== clickedItemIndex
        );

        this.setState({
          fridgeItemArray: [...this.state.fridgeItemArray, newObj],
          cartItemArray: updatedArray,
        });
      });
  };

  itemClickHandler = (id) => {
    // console.log("clicked: ", id);
    console.log("clicked");
    let newArray = this.state.cartItemArray;
    let foundObj = this.state.shopItemArray.find(
      (el) => el.id === parseInt(id)
    );
    if (newArray.includes(foundObj) === false) {
      this.setState(() => ({
        cartItemArray: [...newArray, foundObj],
      }));
    }
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
                shopItemArray={this.state.shopItemArray}
                moveToFridge={this.moveToFridge}
                cartItemArray={this.state.cartItemArray}
                itemClickHandler={this.itemClickHandler}
                user={this.state.user}
              />
            </Route>

            <Route path="/fridge">
              <Fridge 
                item={this.state.fridgeItemArray}
                user={this.state.user} 
              />
            </Route>

            <Route path="/friends">
              <Friends 
                user={this.state.user}
              />
            </Route>

            <Route path="/">
              <HomeIndex
                className="temporary-search-index"
                fridgeItemArray={this.state.fridgeItemArray}
                shopItemArray={this.state.shopItemArray}
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
