import React, { Component } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom";
import HomeIndex from "./components/Home/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";
import Fridge from "./components/Shop/Fridge.js";
import Friends from "./containers/Friends.js";
import Shop from "./containers/Shop.js";
import Signup from "./components/Navbar/Signup.js";
import Login from "./components/Navbar/Login.js";
import RecipeMain from "./components/Recipe/RecipeMain";


class App extends Component {
  state = {
    shopItemArray: [],
    fridgeItemArray: [],
    fridgeArray: [],
    recipeArray: [],
    userCartArrays: [],
    friendArray: [],
    followerArray: [],
    OurCartArray: [],
    user: {},
    cart: {},
    userFridge: {},
    userCarts: {},
    userCartObj: {},
    
  };

  componentDidMount() {
    // localStorage.clear()
    // localStorage.removeItem("token")
    // localStorage.removeItem("userId")
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
          this.setState(() => ({ user: data.user}), () => this.userFollows());
      })
    }
  }

  userFollows = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}/followees`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
          Accepts: "application/json"
        }
      })
      .then((resp) => resp.json())
      .then((friend) => {
        this.setState(() => ({ friendArray: friend.followers }));

        fetch(`http://localhost:3000/api/v1/users/${this.state.user.id}/followers`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Contect-Type": "application/json",
            Accepts: "appliation/json"
          }
        })
          .then(resp => resp.json())
          .then((follower) => {
            this.setState(() => ({ followerArray: follower.followers }))
          })
      });
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

        fetch("http://localhost:3000/api/v1/fridges", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accepts: "application/json"
          },
          body: JSON.stringify({ user_id: data.user.id })
        })
          .then(resp => resp.json())
          .then(userFridge => {
            this.setState({ fridge: userFridge })

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
        })
      
  };
        // this.setState({ user: data.user }, () => this.props.history.push('/'))
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
      // this.setState({ user: data.user }, () => this.props.history.push('/'))
      this.setState({ 
        user: data.user

      })
    })
  };

  componentDidUpdate(prevProps, prevState) {

    if (prevState.user !== this.state.user ) {
        const urls = [
          "http://localhost:3000/api/v1/items",
          "http://localhost:3000/api/v1/recipes",
          "http://localhost:3000/api/v1/cart_items",
          "http://localhost:3000/api/v1/user_carts/",
          "http://localhost:3000/api/v1/fridge_items",
          "http://localhost:3000/api/v1/fridges"
        ];
        Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
          (data) =>
            this.setState(() =>  ({
              shopItemArray: data[0],
              recipeArray: data[1],
              cartItemArray: data[2],
              userCarts: data[3],
              fridgeItemArray: data[4],
              // fridgeItemArray: data[4].map((el) => el.item),
              fridgeArray: data[5]
            }), () => this.findUserCart()
        ));
     }
  }


  findUserCart = () => {
    let foundCartObj = this.state.userCarts.filter(el => el.user_id === this.state.user.id )
    let userCartObjId = foundCartObj[0].id
    fetch(`http://localhost:3000/api/v1/user_carts/${userCartObjId}`)
      .then(resp => resp.json())
      .then(data => this.setState(() => ({ userCartArrays: data.cart.cart_item, userCartObj: data }), ()=>this.findUserFridge()))
  }

  findUserFridge = () => {
    let foundObj = this.state.fridgeArray.find(el => el.user_id === this.state.user.id)
    let foundUserFridge = this.state.fridgeItemArray.filter(el => el.fridge.user_id === this.state.user.id )
    this.setState(() => ({ fridgeItemArray: foundUserFridge, userFridge: foundObj.id  }))

  }

  // OurCart = () => {
  //   let foundOurCartArray = this.state.userCarts.filter(el=>el.cart_id === this.state.userCartObj.cart_id)
  //   this.setState(()=>({ OurCartArray: foundOurCartArray  }))
  // }



  fridgeSubmit = (clickedItemIndex, quantity) => {
    fetch("http://localhost:3000/api/v1/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ 
        name: clickedItemIndex.name,
        price: clickedItemIndex.price,
        description: clickedItemIndex.description,
        quantity: quantity,
        image: clickedItemIndex.image,
        category: clickedItemIndex.category,
        sub_category: clickedItemIndex.sub_category
      }),
    })
      .then((res) => res.json())
      .then((data) => this.renderToFridge(data.id))
              
    };

    renderToFridge = (itemId) => {
      console.log("clicked: ", itemId)
      fetch("http://localhost:3000/api/v1/fridge_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ 
          item_id: itemId,
          fridge_id: this.state.userFridge
          })
      })
        .then(res => res.json())
        .then(data => this.setState({
          fridgeItemArray: [...this.state.fridgeItemArray, data]
        }))
    }


    addToFridge = (cartId, itemId) => {
      console.log("clicked: ", itemId)
      fetch("http://localhost:3000/api/v1/fridge_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accepts": "application/json"
        },
        body: JSON.stringify({ 
          item_id: itemId,
          fridge_id: this.state.userFridge
          })
      })
        .then(res => res.json())
        .then(data => this.setState( () => ({
          fridgeItemArray: [...this.state.fridgeItemArray, data] }), () => this.cartItemDeleteHandler(cartId))
        )
    }

    cartItemDeleteHandler = (cartId) => {
      let updatedArrays = this.state.userCartArrays.filter(
        (el) => el.id !== cartId
      );
      fetch(`http://localhost:3000/api/v1/cart_items/${cartId}`, {
        method: "DELETE",
      })
        .then((resp) => resp.json())
        .then(this.setState({ userCartArrays: updatedArrays }));
    };
  


  cartItemClickHandler = (item) => {
    fetch("http://localhost:3000/api/v1/cart_items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify({
        cart_id: this.state.userCartObj.cart_id,
        item_id: item.id,
      }),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState(() => ({
          userCartArrays: [...this.state.userCartArrays, data],
        }))
    );
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

  addFriendtoCartHandler = (user) => {
    fetch("http://localhost:3000/api/v1/user_carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ 
        user_id: user.id,
        cart_id: this.state.userCartObj.cart_id
       })
    })
      .then(resp => resp.json())
      .then(newUser => this.setState(()=>({ userCarts: [...this.state.userCarts, newUser] })))
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
    fetch("http://localhost:3000/api/v1/recipes", {
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
    // console.log(this.state)
    // console.log(this.state.userCartArray)
    // console.log(this.state.userCartObj.id)
    console.log(this.state.fridgeItemArray)
    

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
                  cartItemArray={this.state.cartItemArray}
                  userCartArrays={this.state.userCartArrays}
                  addToFridge={this.addToFridge}
                  itemClickHandler={this.cartItemClickHandler}
                  deleteHandler={this.cartItemDeleteHandler}
                  ourCartArray={this.state.OurCartArray}
                  user = {this.state.user}
                  userId={userId}
                /> 
              </Route>

              <Route path="/fridge">
                <Fridge 
                  item={this.state.fridgeItemArray}
                  fridgeSubmit={this.fridgeSubmit}
                  userId = {userId}
                />
              </Route>

              <Route path="/friends">
                <Friends 
                  user={this.state.user}
                  friends={this.state.friendArray}
                  follower={this.state.followerArray}
                  addFriendHandler={this.addFriendHandler}
                  deleteFriendHandler={this.deleteFriendHandler}
                  addFriendtoCartHandler={this.addFriendtoCartHandler}
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