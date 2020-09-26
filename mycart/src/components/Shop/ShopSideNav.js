import React from 'react'
import "./shop.css";
import { BakeryCategory } from "./Subcategory-lists/Bakery.js"
import { MeatCategory } from "./Subcategory-lists/Meat.js"
// import { ShopCategory } from "../components/Shop/ShopCategory.js";
// import ShopSubcategory from '../components/Shop/ShopSubcategory.js';

class ShopSideNav extends React.Component {

  state = {
    itemArray: [],
    meatClicked: false,
    bakeryClicked: false,
    produceClicked: false,
    seafoodClicked: false,
    cheeseClicked: false,
    preparedClicked: false,
    liquorClicked: false,
    otherClicked: false

  }

  componentDidMount() {
    fetch("http://localhost:8000/items")
    .then((res) => res.json())
    .then((data) => this.setState({ itemArray: data }));
  }


  clickHandler = (e) => {
    if(e.target.textContent==="Meat"){
      this.setState((previousState) => ({
        meatClicked: !previousState.meatClicked
      }))
    } else if(e.target.textContent==="Bakery"){
      this.setState((previousState) => ({
        bakeryClicked: !previousState.bakeryClicked
      }))
    } else if(e.target.textContent==="Produce"){
      this.setState((previousState) => ({
        produceClicked: !previousState.produceClicked
      }))
    } else if(e.target.textContent==="Seafood"){
      this.setState((previousState) => ({
        seafoodClicked: !previousState.seafoodClicked
      }))
    } else if(e.target.textContent==="Cheese"){
      this.setState((previousState) => ({
        cheeseClicked: !previousState.cheeseClicked
      }))
    } else if(e.target.textContent==="Prepared Foods"){
      this.setState((previousState) => ({
        preparedClicked: !previousState.preparedClicked
      }))
    } else if(e.target.textContent==="Wine, Beer and Spirits"){
      this.setState((previousState) => ({
        liquorClicked: !previousState.liquorClicked
      }))
    } else if(e.target.textContent==="Other Departments"){
      this.setState((previousState) => ({
        otherClicked: !previousState.otherClicked
      }))
    }
  }

  subclickHandler = (e) => {
    console.log("helllloo", e.target)
  }

  // filter = (category) => {
  //   return category.map(el => <ShopSubcategory item={el} />)
  // }

  render() {

    return(
      <div className="dd-wrapper" style={{ display: "flex" }}>
        <div
          className="dd-category"
          style={{
            padding: "10px",
            width: "auto",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="category" onClick={this.clickHandler}><p>Bakery</p> 
              <ul className={this.state.bakeryClicked ? "active" : "subcategory"}>
                {this.state.bakeryClicked ? BakeryCategory.map((item) => { 
                  return( 
                    <li className={item.cName} key={item.id}>
                        {item.subcategory}
                    </li>
                  )})
                :
                null
                }
              </ul> 
            </li>

            <li className="category" onClick={this.clickHandler}><p>Meat</p> 
              <ul className={this.state.meatClicked ? "active" : "subcategory"}>
                {this.state.meatClicked ? MeatCategory.map((item) => { 
                  return( 
                    <li className={item.cName} key={item.id} onClick={this.subclickHandler} >
                        {item.subcategory}
                    </li>
                  )})
                :
                null
                }
              </ul> 
            </li>

            <li className="category" onClick={this.clickHandler}><p>Seafood</p>
              <ul className={this.state.seafoodClicked ? "active" : "subcategory"}>
                <li>Crab and Lobster</li>
                <li>Fresh Seafood</li>
                <li>Frozen Shrimp & Seafood</li>
              </ul>
            </li>
            <li className="category" onClick={this.clickHandler}><p>Produce</p>
              <ul className={this.state.produceClicked ? "active" : "subcategory"}>
                <li>Fruit</li>
                <li>Vegetables</li>
              </ul>
            </li>
            <li className="category" onClick={this.clickHandler}><p>Cheese</p>
              <ul className={this.state.cheeseClicked ? "active" : "subcategory"}>
                <li>Blue Cheese</li>
                <li>Cave-Ripened Cheese</li>
                <li>Feta Cheese</li>
                <li>Cheddar, Gouda, Swiss & more</li>
                <li>Goat & Sheep</li>
                <li>Italian Cheese</li>
              </ul>
            </li>
            <li className="category" onClick={this.clickHandler}><p>Prepared Foods</p>
              <ul className={this.state.preparedClicked ? "active" : "subcategory"}>
                <li>Asian</li>
                <li>Pizza & Wings</li>
                <li>Salads</li>
                <li>Soups</li>
                <li>Sushi</li>
              </ul>
            </li>
            <li className="category" onClick={this.clickHandler}><p>Wine, Beer and Spirits</p>
              <ul className={this.state.liquorClicked ? "active" : "subcategory"}>
                <li>Beer</li>
                <li>Wine</li>
              </ul>
            </li>
            <li className="category" onClick={this.clickHandler}><p>Other Departments</p>
              <ul className={this.state.otherClicked ? "active" : "subcategory"}>
                <li>Baby</li>
                <li>Beverages</li>
                <li>Bulk Foods</li>
                <li>Coffee Shop</li>
                <li>Dairy</li>
                <li>Grocery</li>
                <li>Kosher</li>
                <li>Personal Care and Makeup</li>
                <li>Pet Supplies</li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    )
  }
}

export default ShopSideNav