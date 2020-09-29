import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";
// import { Button } from "./Button.js";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked,
    }));
  };

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

        <div className="dropdown">
          <button className="dropbtn">Sign In</button>
          <div className="dropdown-content">
            <h4>SIGN IN</h4>
            <div className="sign-in-form">
              <form>
                <input
                  type="text"
                  id="sign-in-username"
                  placeholder="Enter Username"
                />
                <input
                  type="text"
                  id="sign-in-password"
                  placeholder="Enter Password"
                />
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
