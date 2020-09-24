import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";
import { Button } from "./Button.js";
// require('dotenv').config()

// class Navbar extends Component {

//     state = {
//       recipeArray: []
//     }

//     componentDidMount(){
//       fetch(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`)
//         .then(resp=>resp.json())
//         .then(data=>this.setState(()=>({
//           recipeArray: data })))
//     }

//     render() {

//         return (
//                 <div className="header-link" >
//                     <img src="https://static.thenounproject.com/png/356889-200.png" alt="img" width="30" />
//                     <Link to="/departments">Departments</Link>

//                     <Link to="/cart">Cart</Link>

//                     <Link to="/myrecipes">myrecipes</Link>

//                   <hr />

//                   <Switch class="header-switch">
//                     <Route path="/departments">
//                       <Departments />
//                     </Route>
//                     <Route path="/cart">
//                       <Cart />
//                     </Route>
//                     <Route path="/myrecipes">
//                       <MyRecipes recipe={this.state.recipeArray} />
//                     </Route>
//                   </Switch>
//                 </div>
//           )
//     }
// }

// export default Navbar

class Navbar extends Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked,
    }));
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">Cart-In</h1>
        <div className="menu-icon" onClick={this.clickHandler}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;
