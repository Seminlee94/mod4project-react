import React from "react";
import Form from "react-bootstrap/Form";

import React from "react";
import Form from "react-bootstrap/Form";
class Search extends React.Component {
  inputHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(e.target.value);
  };
  render() {
    return (
      <Form
        style={{
          width: "600px",
          margin: "auto",
          marginTop: "22px",
          marginBottom: "35px",
        }}
      >
        <Form.Control
          className="search-input"
          type="text"
          placeholder="Enter Search Here"
          value={this.props.searchValue}
          onChange={this.inputHandler}
        ></Form.Control>
      </Form>
    );
  }
}
export default Search;
