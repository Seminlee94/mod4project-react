import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Search from "./components/Search.js";

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
      <header className="App-header"> <Header /> </header>
        <div className="searchBar">
          <Search searchValue={this.state.searchValue} search={this.search}/>
        </div>    
        
          <div className="temporary-search-index"> 
          <TempIndex itemArray={this.showItemArray}/>
          </div>
          <ul> 
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/myrecipes">myrecipes</Link>
            </li>
          </ul>
      </div>
        

  )
  }
}

export default App;
