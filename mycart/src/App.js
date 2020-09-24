import React, { Component } from "react";
import "./App.css";
import HomeIndex from "./containers/HomeIndex";
import Navbar from "./components/Navbar/Navbar.js";

class App extends Component {

  state = {
    itemArray: [],
    searchValue: "",
  }

  componentDidMount() {
      fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => this.setState({ itemArray: data }));
  }
 

  search = (searchValue) => {
    this.setState({ searchValue: searchValue });
    console.log("settingSearch:", this.state.searchValue)
  };

  showItemArray = () => {
  return this.state.searchValue === ""
    ? this.state.itemArray
    : this.state.itemArray.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(this.state.searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(this.state.searchValue.toLowerCase())
        )
  }

  render() {

  return(     
    <div className="App">
      <Navbar />
      <Search className="searchBar" searchValue={this.state.searchValue} search={this.search}/>
      
      <TempIndex className="temporary-search-index" itemArray={this.showItemArray()}/>

    </div>
        

  )
  // render() {
  //   return (
  //     <div className="app">
  //       <Navbar />
  //       <HomeIndex />
  //     </div>
  //   );
  }
}

export default App;
