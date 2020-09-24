import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Fridge from './containers/Fridge'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header />
      </header>
      <div className="cart-header-button"> 
      <Fridge />
      </div>
    </div>
  );
}

export default App;
