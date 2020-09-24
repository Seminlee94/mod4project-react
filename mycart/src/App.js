// import React, { Component } from 'react';
// import './App.css';
// import {
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Departments from "./container/Departments.js";
// import MyRecipes from "./container/MyRecipes.js";
// import Cart from "./components/Cart.js";

// class App extends Component {
//   render() {
//     return(
//       <div>
//         <ul>
//           <li>
//             <Link to="/departments">Departments</Link>
//           </li>
//           <li>
//             <Link to="/cart">Cart</Link>
//           </li>
//           <li>
//             <Link to="/myrecipes">myrecipes</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route path="/departments">
//             <Departments />
//           </Route>
//           <Route path="/cart">
//             <Cart />
//           </Route>
//           <Route path="/myrecipes">
//             <MyRecipes />
//           </Route>
//         </Switch>
//       </div>
//     )
//   }
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
      </header>
      <div className="searchBar"><Search/></div>
    </div>
  );
}
export default App;
