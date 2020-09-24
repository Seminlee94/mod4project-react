import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Departments from "./containers/Departments.js";
import MyRecipes from "./containers/MyRecipes.js";
import Cart from "./containers/Cart.js";
require('dotenv').config()

// console.log(process.env)
class App extends Component {
  
  state = {
    recipeArray: []
  }

  componentDidMount(){
    fetch(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=2&apiKey=${process.env.REACT_APP_SPOONACULAR_KEY}`)
      .then(resp=>resp.json())
      .then(data=>this.setState(()=>({
        recipeArray: data })))
  }


  render() {
    console.log(this.state.recipeArray)
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
            <MyRecipes recipe={this.state.recipeArray} />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header'
// import Search from './components/Search';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//           <Header />
//       </header>
//       <div className="searchBar"><Search/></div>
//     </div>
//   );
// }
// export default App;
