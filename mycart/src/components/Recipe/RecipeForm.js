import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";

class RecipeForm extends React.Component {
  state = {
    name: "",
    image: "",
    url: "",
    ingredients: "",
  };

  recipeSubmitHandler = (e) => {
    e.preventDefault();
    this.props.recipeSubmit(this.state);
    this.setState({
      name: "",
      image: "",
      url: "",
      ingredients: "",
    });
  };

  recipeFormHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.props.onHide}
        show={this.props.show}
      >
        <Modal.Header closeButton>Add a new recipe</Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control size="lg" onSubmit={this.recipeSubmitHandler}>
              <input
                type="text"
                placeholder="Recipe Name"
                name="name"
                value={this.state.name}
                onChange={this.recipeFormHandler}
              />
              <br />
              <input
                type="text"
                placeholder="Recipe Image"
                name="image"
                value={this.state.image}
                onChange={this.recipeFormHandler}
              />
              <br />
              <input
                type="text"
                placeholder="Recipe URL-Bookmark"
                name="url"
                value={this.state.url}
                onChange={this.recipeFormHandler}
              />
              <br />
              <input
                type="text"
                placeholder="Recipe Ingredients"
                name="ingredients"
                value={this.state.ingredients}
                onChange={this.recipeFormHandler}
              />
              <br />
              <input type="submit" name="submit" />
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default RecipeForm;
