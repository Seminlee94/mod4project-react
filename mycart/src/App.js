import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Departments from "./container/Departments.js";
import MyRecipes from "./container/MyRecipes.js";
import Cart from "./components/Cart.js";

class App extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to="/departments">Departments</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/myrecipes">myrecipes</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route path="/departments">
            <Departments />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/myrecipes">
            <MyRecipes />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
