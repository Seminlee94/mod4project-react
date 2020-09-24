import React, { Fragment } from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Departments from "../containers/Departments.js";
import MyRecipes from "../containers/MyRecipes.js";
import Cart from "../containers/Cart.js";
require('dotenv').config()

  

class Header extends React.Component {

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

        return (
            <Fragment>
                <div>
                    <img src="https://static.thenounproject.com/png/356889-200.png" alt="img" width="30" />
                    <Link to="/departments">Departments</Link>

                    <Link to="/cart">Cart</Link>

                    <Link to="/myrecipes">myrecipes</Link>
 
        
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
            </Fragment>
          )
    }
}


export default Header