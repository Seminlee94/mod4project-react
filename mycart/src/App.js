import React, { Component } from 'react';
import './App.css';
// import Header from "./components/Header.js";
import Search from "./components/Search.js";
import TempIndex from "./containers/TempIndex";
import Navbar from "./components/Navbar/Navbar.js";

class App extends Component {

  state = {
    itemArray: [],
    searchValue: "",
  }

  componentDidMount() {
      fetch("http://localhost:8002/items")
      .then((res) => res.json())
      .then((data) => this.setState({ itemArray: data }));
  }

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
  };

  showItemArray = 
  this.state.searchValue === ""
    ? this.state.itemArray
    : this.state.itemArray.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(this.state.searchValue.toLowerCase())
    )
    
  render() {

  return(     
    <div className="App">
      {/* <header className="App-header"> <Header /> </header> */}
      <Navbar />
      <Search className="searchBar" searchValue={this.state.searchValue} search={this.search}/>
      
      <TempIndex className="temporary-search-index" itemArray={this.showItemArray}/>

    </div>
        

  )
  }
}

export default App;
