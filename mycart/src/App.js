import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./components/Shop/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";
import Signup from "./components/Navbar/Signup.js";
import Login from "./components/Navbar/Login.js";
import RecipeMain from "./components/Recipe/RecipeMain";
import Logout from "./components/Navbar/Logout.js";

class App extends Component {
  state = {
    shopItemArray: [],
    fridgeItemArray: [],
    recipeArray: [],
    // cartItemArray: [],
    userCartArray: [],
    // user: {},
  };

  // componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     fetch("http://localhost:3005/profile", {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         this.setState(() => ({ user: data.user }));
  //       });
  //   }
  // }

  // signupHandler = (userObj) => {
  //   fetch("http://localhost:3005/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accepts: "application/json",
  //     },
  //     body: JSON.stringify({ user: userObj }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // this.setState({ user: data.user })
  //       localStorage.setItem("token", data.jwt);
  //       localStorage.setItem("userId", data.user.id);
  //       this.setState({ user: data.user });

  //       // this.setState({ user: data.user }, () => this.props.history.push('/fridge'))
  //     });
  // };

  // loginHandler = (userObj) => {
  //   fetch("http://localhost:3005/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accepts: "application/json",
  //     },
  //     body: JSON.stringify({ user: userObj }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       localStorage.setItem("token", data.jwt);
  //       localStorage.setItem("userId", data.user.id);
  //       console.log(data.user.id);
  //       this.setState({ user: data.user });
  //       // this.setState({ user: data.user }, () => this.props.history.push('/fridge'))
  //     });
  // };

  // logoutHandler = () => {
  //   localStorage.removeItem("token");
  //   this.setState({ user: {} });
  // };

  // componentUpdate(prevProps, prevState) {
  //   if (prevState.user !== this.state.user) {
  componentDidMount() {
    const urls = [
      "http://localhost:3005/items",
      "http://localhost:3005/fridge-items",
      "http://localhost:3005/recipes",
      "http://localhost:3005/user_carts/",
    ];
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (data) =>
        this.setState({
          shopItemArray: data[0],
          fridgeItemArray: data[1].map((el) => el.item),
          recipeArray: data[2],
          userCartArray: data[3],
        })
    );
  }

  // "http://localhost:3005/cart_items/1",
  // cartItemArray: data[3],

  moveToFridge = (id, clickedItemIndex) => {
    // Copy the object, so that we don't change any places it's being referenced
    let foundObj = {
      ...this.state.shopItemArray.find((el) => el.id === parseInt(id)),
    };
    delete foundObj.id; //deletes the store ID, letting newObj create new ID for fridgeitem so we don't get conflicts when trying to post
    fetch("http://localhost:3005/fridge-items", {
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

  //posts items to cart, //differentiate this with user_cart
  //was previously cartItem w/o POST
  cartItemClickHandler = (item) => {
    fetch("http://localhost:3005/user_carts/1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        cart_id: 1,
        item_id: item.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState(() => ({
          userCartArray: [...this.state.userCartArray, data],
        }))
      );
  };

  cartItemDeleteHandler = (cartId) => {
    let updatedArray = this.state.userCartArray.filter(
      (el) => el.id !== cartId
    );
    fetch(`http://localhost:3005/user_carts/${cartId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(this.setState({ userCartArray: updatedArray }));
  };

  // let auth_link;
  // if (!this.state.user || Object.keys(this.state.user).length === 0) {
  //   auth_link = (
  //     <>
  //       <Signup submitHandler={this.signupHandler} />
  //       <Login submitHandler={this.loginHandler} />{" "}
  //     </>
  //   );
  // } else {
  //   auth_link = <Logout logoutHandler={this.logoutHandler} />;
  recipeSubmit = (recipeInput) => {
    fetch("http://localhost:3005/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(recipeInput),
    })
      .then((res) => res.json())
      .then((newObj) =>
        this.setState({ recipeArray: [newObj, ...this.state.recipeArray] })
      );
  };

  render() {
    console.log(this.state.fridgeItemArray);
    console.log(this.state.userCartArray);
    // debugger;
    return (
      <BrowserRouter>
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
          <Navbar />
          {/* <div>{auth_link}</div> */}

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
                userCartArray={this.state.userCartArray}
                itemClickHandler={this.cartItemClickHandler}
                deleteHandler={this.cartItemDeleteHandler}
                // userId={this.state.user.id}
              />
            </Route>

            <Route path="/fridge">
              <Fridge
                item={this.state.fridgeItemArray}
                fridgeSubmit={this.moveToFridge}
              />
            </Route>

            <Route path="/friends">
              <Friends user={this.state.user} />
            </Route>
            <Route path="/recipes">
              <RecipeMain
                recipes={this.state.recipeArray}
                recipeSubmit={this.recipeSubmit}
                fridgeContent={this.state.fridgeItemArray}
              />
            </Route>

            <Route path="/">
              <HomeIndex
                fridgeItemArray={this.state.fridgeItemArray}
                shopItemArray={this.state.shopItemArray}
                recipeArray={this.state.recipeArray}
              />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
