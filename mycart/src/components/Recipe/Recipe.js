import React from "react";

const Recipes = (props) => {
  return (
    <div>
      <h2>{props.recipe.title}</h2>
      <img src={props.recipe.picture} alt={props.recipe.title} />
    </div>
  );
};

export default Recipes;
