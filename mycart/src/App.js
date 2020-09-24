import React, { Component } from "react";
import "./App.css";
import HomeIndex from "./containers/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <HomeIndex />
      </div>
    );
  }
}

export default App;
