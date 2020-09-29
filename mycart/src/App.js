import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./containers/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";
import Signup from "./components/Navbar/Signup.js";
import Login from "./components/Navbar/Login.js";
import Logout from "./components/Navbar/Logout.js";

class App extends Component {
  
  state = {
    shopItemArray: [],
    fridgeItemArray: [],
    recipeArray: [],
    cartItemArray: [],
    userCartArray: [],
    user: {}
  }
 
  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/api/v1/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState(() => ({ user: data.user }))
      })
    }
  }

  signupHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
      .then(resp => resp.json())
      .then(data => {
        // this.setState({ user: data.user })
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("userId", data.user.id);
        // this.setState({ user: data.user })

        // this.setState({ user: data.user }, () => this.props.history.push('/fridge'))
    })
  }
  

  loginHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.user.id);
      this.setState({ user: data.user })
      // this.setState({ user: data.user }, () => this.props.history.push('/fridge'))
    })
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    this.setState({ user: {} })
  }



  componentDidUpdate(prevProps, prevState) {
    // looking for a change in editPizza
    if (prevState.user !== this.state.user ) {
      // set the form values to match the editPizza props
        const urls = [
          "http://localhost:3000/api/v1/items",
          "http://localhost:3000/api/v1/fridge_items",
          "http://localhost:3000/api/v1/recipes",
          "http://localhost:3000/api/v1/cart_items",
          "http://localhost:3000/api/v1/user_carts/1"
        ];
        // const promises = urls.map((url) => fetch(url));
        Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
          (data) =>
            this.setState({
              shopItemArray: data[0],
              fridgeItemArray: data[1],
              recipeArray: data[2],
              cartItemArray: data[3],
              userCartArray: data[4].cart.cart_item
            })
        );
     }
  }
  





  // moveToFridge = (id, clickedItemIndex) => {
  //   // Copy the object, so that we don't change any places it's being referenced
  //   let foundObj = {
  //     ...this.state.itemArray.find((el) => el.id === parseInt(id)),
  //   };
  //   delete foundObj.id; //deletes the store ID, letting newObj create new ID for fridgeitem so we don't get conflicts when trying to post
  //   fetch("http://localhost:3000/api/v1fridge-items", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(foundObj),
  //   })
  //     .then((res) => res.json())
  //     .then((newObj) => {
  //       const updatedArray = this.state.cartItemArray.filter(
  //         (item, index) => index !== clickedItemIndex
  //       );

  //       this.setState({
  //         fridgeItemArray: [...this.state.fridgeItemArray, newObj],
  //         cartItemArray: updatedArray,
  //       });
  //     });
  // };
  itemClickHandler = (item) => {
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        cart_id: 1,
        item_id: item.id
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState(()=> ({
      userCartArray: [...this.state.userCartArray, data]
    }))
    )
  };

   deleteHandler = (cartId) => {
    let updatedArray = this.state.userCartArray.filter(el => el.id !== cartId)
    fetch(`http://localhost:3000/api/v1/cart_items/${cartId}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(this.setState({ userCartArray: updatedArray }))

  }


  render() {
    // console.log([this.state.user.user]["id"])
    let auth_link
    if (!this.state.user || Object.keys(this.state.user).length === 0) {
      auth_link = <><Signup submitHandler={this.signupHandler}/><Login submitHandler={this.loginHandler}/> </> } else {
        auth_link = <Logout logoutHandler={this.logoutHandler} />
    }
    

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
            <Navbar  />
            <div>
              {auth_link}
            </div>


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
                  cartItemArray={this.state.cartItemArray}
                  userCartArray={this.state.userCartArray}
                  moveToFridge={this.moveToFridge}
                  itemClickHandler={this.itemClickHandler}
                  deleteHandler={this.deleteHandler}
                  userId={this.state.user.id}
                /> 
              </Route>

              {/* <Route path="/fridge">
                <Fridge 
                  item={this.state.fridgeItemArray}
                />
              </Route> */}

              <Route path="/friends">
                <Friends 
                />
              </Route>

              <Route path="/">
                {/* <HomeIndex
                  className="temporary-search-index"
                  fridgeItemArray={this.state.fridgeItemArray}
                  shopItemArray={this.state.shopItemArray}
                  recipeArray={this.state.recipeArray}
                /> */}
              </Route>


            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
