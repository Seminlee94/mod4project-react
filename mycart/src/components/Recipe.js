import React from 'react'

const Recipe = (props) => {
return (

        <div className="recipe-card">
            <h2>{props.recipe.title}</h2>
            <img src={props.recipe.image} alt={props.recipe.title}/>
        </div>

  )
}

export default Recipe