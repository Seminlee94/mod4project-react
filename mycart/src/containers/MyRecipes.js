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