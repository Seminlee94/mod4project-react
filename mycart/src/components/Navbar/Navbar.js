import React, { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems.js";

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
                  {<item.title />}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
