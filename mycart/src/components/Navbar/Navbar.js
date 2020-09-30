import React, { Component } from "react";
import "./Navbar.css";


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
            <a className="nav-links" href="/recipes">
              Recipes
            </a>
          </li>
          <li>
            <a className="nav-links" href="/friends">
              Friends
            </a>
          </li>
      
          {(Object.keys(this.props.user).length === 0)
          
            ? 
            
            <>
              <li>
                <a className="nav-links" href="/login">
                  Log in
                </a>
              </li>

            </>
           
            
            : 

            <li>
              <a className="nav-links" href="/" onClick={this.props.logoutHandler} >
                Log out
              </a>
            </li>

          
          }


        </ul>
      </nav>
    );
  }
}

export default Navbar;

