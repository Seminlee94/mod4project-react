import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";
// import { Button } from "./Button.js";

class Navbar extends Component {
  state = {
    clicked: false,
    username: "",
    password: ""
  }

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked,
    }));
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler= (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">Cart-In</h1>
        <div className="menu-icon" onClick={this.clickHandler}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div class="dropdown">
            <button class="dropbtn">Sign In</button>
            <div class="dropdown-content">
                <h4>SIGN IN</h4>
                <div class="sign-in-form">
                    <form onSubmit={this.submitHandler}>
                      <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}   />
                      <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}   />
                      <input type="submit" value="Sign In" />
                    </form>
                </div>
                <h6>OR</h6>
                <h6>New User? SIGN UP!!</h6>
                <div>
                  <button>SIGN IN</button>
                </div>
              </form>
            </div>
            <h6>OR</h6>
            <h6>New User? SIGN UP!!</h6>
            <div>
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
