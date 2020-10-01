import React from "react";
import Card from "react-bootstrap/Card";
import "./recipe.css";

const Recipes = (props) => {
  return (
    <Card
      style={{ width: "200px" }}
      onClick={(e) => {
        props.recipeClickListener(props.recipe);
      }}
    >
      <Card.Img
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
        src={props.recipe.picture}
        alt={props.recipe.title}
      />
      <Card.ImgOverlay>
        <div
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            color: "rgba(255, 255, 255, 1.0)",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            width: "100%",
          }}
        >
          {props.recipe.title}
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default Recipes;
