import React from 'react';
import Recipe from "../components/Recipe.js";

class MyRecipes extends React.Component {

    recipes = () => {
        return this.props.recipe.map(el => <Recipe recipe={el} />)
    }

    render(){

        return (
            <div>
                {this.recipes()}
            </div>
        )
    }
}

export default MyRecipes

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