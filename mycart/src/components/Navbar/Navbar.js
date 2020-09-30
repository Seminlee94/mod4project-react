import React, { Component } from "react";
import "./Navbar.css";
// import Logout from "./Logout.js";
class Navbar extends Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked,
    }));
  };

  logoutHandler = () => {
    localStorage.removeItem("token");
    this.props.setState({ user: {} });
  };

  render() {
    console.log(this.props.user.user)
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">Cart-In</h1>
        <div className="menu-icon" onClick={this.clickHandler}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>

          <li>
            <a className="nav-links" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-links" href="/shop">
              Shop
            </a>
          </li>
          <li>
            <a className="nav-links" href="/fridge">
              Fridge
            </a>
          </li>
          <li>
            <a className="nav-links" href="/friends">
              Friends
            </a>
          </li>
      
          {this.props.user.user 
          
            ? 
            
            <li>
              <a className="nav-links" href="/" onClick={this.logoutHandler} >
                Log out
              </a>
            </li>
            
            : 

            <>
              <li>
                <a className="nav-links" href="/login">
                  Log in
                </a>
              </li>
{/* 
              <li>
                <a className="nav-links" href="/signup">
                  Sign up
                </a>
              </li> */}

            </>
          
          }


        </ul>
      </nav>
    );
  }
}

export default Navbar;

