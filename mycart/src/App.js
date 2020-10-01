import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./containers/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";
import Signup from "./components/Navbar/Signup.js";
import Login from "./components/Navbar/Login.js";
import RecipeMain from "./components/Recipe/RecipeMain";
import Logout from "./components/Navbar/Logout.js";
import { Redirect } from "react-router-dom";

class App extends Component {
  state = {
    shopItemArray: [],
    fridgeItemArray: [],
    recipeArray: [],
    // cartItemArray: [],
    userCartArray: [],
    friendArray: [],
    user: {},
    cart: {},
    userCart: {}
    
  };

  componentDidMount() {
    // localStorage.clear()
    // localStorage.removeItem("token")
    // this.state.user = {}
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: { 
          Authorization: `Bearer ${token}`
      }
      })
        .then((resp) => resp.json())
        .then(data => { 
          localStorage.setItem("userId", data.user.id);
          this.setState(() => ({ user: data.user}), () => this.userFollowees())    
      })
    }
  }

  userFollowees = () => {
    fetch(
      `http://localhost:3000/api/v1/users/${this.state.user.id}/followees`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
          Accepts: "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((friend) =>
        this.setState(() => ({ friendArray: friend.followers }))
        );
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
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        localStorage.setItem("userId", data.id);
        this.setState({ user: data.user });


        fetch("http://localhost:3000/api/v1/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ username: data.user.username })
        })
          .then(resp => resp.json())
          .then(cart => { 
            this.setState({ cart: cart })
            console.log(cart.id)
            console.log(data.user.id)

            fetch(`http://localhost:3000/api/v1/user_carts`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                accepts: "application/json"
              },
              body: JSON.stringify({ 
                cart_id: cart.id,
                user_id: data.user.id })
              })
                .then(resp => resp.json())
                .then(userCart => this.setState({ userCart: userCart }))
                
          })
        })
      
  };
  //       // this.setState({ user: data.user }, () => this.props.history.push('/fridge'))
  //     });
  // }


  loginHandler = (userObj) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data.id);
      // this.setState({ user: data.user }, () => history.push('/'))
      this.setState({ 
        user: data.user

      })
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user ) {
        const urls = [
          "http://localhost:3000/api/v1/items",
          "http://localhost:3000/api/v1/fridge_items",
          "http://localhost:8000/recipes",
          "http://localhost:3000/api/v1/cart_items",
          "http://localhost:3000/api/v1/user_carts/1",
          // `http://localhost:3000/api/v1/user_carts/${this.state.user.user.id}`,

        ];
        Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
          (data) =>
            this.setState({
              shopItemArray: data[0],
              fridgeItemArray: data[1],
              recipeArray: data[2],
              cartItemArray: data[3],
              userCartArray: data[4].cart.cart_item,
            })
        );
     }
  }

  moveToFridge = (id, clickedItemIndex) => {
    // Copy the object, so that we don't change any places it's being referenced
    let foundObj = {
      ...this.state.shopItemArray.find((el) => el.id === parseInt(id)),
    };
    delete foundObj.id; //deletes the store ID, letting newObj create new ID for fridgeitem so we don't get conflicts when trying to post
    fetch("http://localhost:3000/api/v1/fridge_items", {
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

  cartItemClickHandler = (item) => {
    fetch("http://localhost:3000/api/v1/cart_items", {
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
    fetch(`http://localhost:3005/cart_items/${cartId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(this.setState({ userCartArray: updatedArray }));
  };

  addFriendHandler = (id) => {
    let findObj = this.state.friendArray.some(el => el.id === id); 
    return (findObj) ? null :

    fetch(`http://localhost:3000/api/v1/users/${id}/follow`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ follow: { follower_id: this.state.user.id, followee_id: id } })
    })
    .then(resp => resp.json())
    .then(data => this.setState({ friendArray: [...this.state.friendArray, data.user] }))
    
  }

  deleteFriendHandler = (userId) => {
    let updatedArray = this.state.friendArray.filter(
      (el) => el.id !== userId );      
    fetch(`http://localhost:3000/api/v1/users/${userId}/unfollow`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({ follow: { follower_id: this.state.user.id, followee_id: userId } })
    })
      .then((resp) => resp.json())
      .then(this.setState(() => ({ friendArray: updatedArray })));
  };

  logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId")
    this.setState({ user: {} });
  };
    
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
    let userId = localStorage.getItem("userId")

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
            <Navbar user={this.state.user} logoutHandler={this.logoutHandler}/>

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
                  userId = {userId}
                /> 
              </Route>

              <Route path="/fridge">
                <Fridge 
                  item={this.state.fridgeItemArray}
                  userId = {userId}
                />
              </Route>

              <Route path="/friends">
                <Friends 
                  user={this.state.user}
                  friends={this.state.friendArray}
                  addFriendHandler={this.addFriendHandler}
                  deleteFriendHandler={this.deleteFriendHandler}
                  userId = {userId}
                />
              </Route>

              <Route path="/recipes">
              <RecipeMain
                  recipes={this.state.recipeArray}
                  recipeSubmit={this.recipeSubmit}
                  fridgeContent={this.state.fridgeItemArray}
                  userId = {userId}
                />
              </Route>

            <Route path="/">
              <HomeIndex
                fridgeItemArray={this.state.fridgeItemArray}
                shopItemArray={this.state.shopItemArray}
                recipeArray={this.state.recipeArray}
                userId = {userId}
              />
            </Route>

            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
