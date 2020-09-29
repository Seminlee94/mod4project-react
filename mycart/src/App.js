import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./containers/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";
import Signup from "./components/Navbar/Signup.js";
import Login from "./components/Navbar/Login.js";

class App extends Component {
  state = {
    shopItemArray: [],
    fridgeItemArray: [],
    recipeArray: [],
    cartItemArray: [],
    user: null,
  };

  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    })
      .then((resp) => resp.json())
      .then(console.log);
  };

  componentDidMount() {
    const urls = [
      "http://localhost:3007/items",
      "http://localhost:3007/fridge-items",
      "http://localhost:3007/recipes",
      "http://localhost:3007/item_carts",
    ];
    const promises = urls.map((url) => fetch(url));
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (data) =>
        this.setState({
          shopItemArray: data[0],
          fridgeItemArray: data[1],
          recipeArray: data[2],
          cartItemArray: data[3], //is nested map through for element.item
        })
    );
  }

  moveToFridge = (id, clickedItemIndex) => {
    // Copy the object, so that we don't change any places it's being referenced
    let foundObj = {
      ...this.state.shopItemArray.find((el) => el.id === parseInt(id)),
    };
    delete foundObj.id; //deletes the store ID, letting newObj create new ID for fridgeitem so we don't get conflicts when trying to post
    fetch("http://localhost:3007/fridge-items/", {
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

  loginHandler = (userObj) => {
    console.log("logging in: ", userObj);
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ user: userObj }),
    })
      .then((resp) => resp.json())
      .then(console.log);
  };

  render() {
    // const cartItems = this.state.cartItemArray.map((element) => element.item);
    // console.log(cartItems);
    console.log(this.state.recipeArray);
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
            <Route path="/signup">
              <Signup submitHandler={this.signupHandler} />
            </Route>

            <Route path="/login">
              <Login submitHandler={this.loginHandler} />
            </Route>

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
                // user="test"
              />
            </Route>

            <Route path="/friends">
              <Friends user={this.state.user} />
            </Route>

            <Route path="/">
              <HomeIndex
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
