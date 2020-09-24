import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";

class App extends Component {

  render() {
    return(
      <>
        <Header />
        <div className="searchBar"><Search/></div>    
        
      </>
    )
  }
}

export default App;
