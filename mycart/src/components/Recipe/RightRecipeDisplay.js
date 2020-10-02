import React from "react";
import Card from "react-bootstrap/Card";

class RightRecipeDisplay extends React.Component {
  state = { missing: "", user: {} };
  //filter for ingredients inside of fridge that are not included

  missingIngredients = () => {
   
    let fridgeArray = [].concat(this.props.fridgeContent);
    console.log(this.props.fridgeContent)
    const lowercaseArray = [];

    const splitCaseArray = [];
    let num = [].concat(fridgeArray).length;
    for (let i = 1; i < num; i++) {
      lowercaseArray[i] = fridgeArray[i].sub_category.toLowerCase();
      splitCaseArray.push(...lowercaseArray[i].split(", "));
    
    }
 


    lowercaseArray.shift();

    let recipeArray = this.props.recipe.ingredients.split(", ");

    let missing = recipeArray.filter(
      (recipeIngred) => !splitCaseArray.includes(recipeIngred.toLowerCase())
    );
    return missing;
  };

  render() {
    const missingIngredients = this.missingIngredients();

    return (
      <Card
        style={{
          width: "400px",
          marginTop: "50px",
          marginRight: "50px",
        }}
      >
        <Card.Img
          style={{ height: "550px", objectFit: "cover", width: "100%" }}
          src={this.props.recipe.picture}
          alt={this.props.recipe.title}
        />
        <Card.Body>
          <h3>Missing ingredients</h3>
          <ul>
            {missingIngredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    );
  }
}
export default RightRecipeDisplay;