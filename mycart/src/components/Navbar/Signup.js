import React from "react";
import Form from "react-bootstrap/Form";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    address: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
  };

  render() {
    return (
      <div
        style={{
          width: "600px",
          margin: "auto",
          marginTop: "22px",
        }}
      >
        <h1> Sign Up Here </h1>
        <Form
          style={{
            width: "600px",
            margin: "auto",
            marginTop: "22px",
            marginBottom: "35px",
          }}
          onSubmit={this.submitHandler}
        >
          <Form.Control
            size="lg"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <Form.Control
            size="lg"
            type="text"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <Form.Control
            type="text"
            size="lg"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <Form.Control
            type="text"
            size="lg"
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.changeHandler}
          />
          <input type="submit" value="Sign Up" />
        </Form>
      </div>
    );
  }
}

export default Signup;
