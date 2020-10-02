import React from "react";
import Form from "react-bootstrap/Form";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
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
        <h1> Please Log In </h1>
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
          <input type="submit" value="Log in" />
        </Form>
      </div>
    );
  }
}

export default Login;
