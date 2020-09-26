import React from 'react'
import "../components/Shop/shop.css";
import ShopMain from '../components/Shop/ShopMain';
import { BakeryCategory } from "../components/Shop/Subcategory-lists/Bakery.js"
import { MeatCategory } from "../components/Shop/Subcategory-lists/Meat.js"
import { CheeseCategory } from "../components/Shop/Subcategory-lists/Cheese.js"
import { ProduceCategory } from "../components/Shop/Subcategory-lists/Produce.js"
import { SeafoodCategory } from "../components/Shop/Subcategory-lists/Seafood.js"
import { LiquorCategory } from "../components/Shop/Subcategory-lists/Liquor.js"
import { PreparedfoodCategory } from "../components/Shop/Subcategory-lists/Preparedfood.js"
import { OtherCategory } from "../components/Shop/Subcategory-lists/Other.js"
// dfadfadsf


class Shop extends React.Component {

  state = {
    itemArray: [],
    filteredItem: [],
    meatClicked: false,
    bakeryClicked: false,
    produceClicked: false,
    seafoodClicked: false,
    cheeseClicked: false,
    preparedfoodClicked: false,
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
        preparedfoodClicked: !previousState.preparedfoodClicked
      }))
    } else if(e.target.textContent==="Liquor"){
      this.setState((previousState) => ({
        liquorClicked: !previousState.liquorClicked
      }))
    } else if(e.target.textContent==="Other"){
      this.setState((previousState) => ({
        otherClicked: !previousState.otherClicked
      }))
    }
  }

  subclickHandler = (e) => {
    let filteredArray = this.state.itemArray.filter(item => item.sub_category===e.target.textContent)
    this.setState(() => ({
        filteredItem: [...filteredArray]
    }))
  }

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
                {this.state.seafoodClicked ? SeafoodCategory.map((item) => { 
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

            

            <li className="category" onClick={this.clickHandler}><p>Produce</p> 
              <ul className={this.state.produceClicked ? "active" : "subcategory"}>
                {this.state.produceClicked ? ProduceCategory.map((item) => { 
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

            

            <li className="category" onClick={this.clickHandler}><p>Cheese</p> 
              <ul className={this.state.cheeseClicked ? "active" : "subcategory"}>
                {this.state.cheeseClicked ? CheeseCategory.map((item) => { 
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

            

            <li className="category" onClick={this.clickHandler}><p>Liquor</p> 
              <ul className={this.state.liquorClicked ? "active" : "subcategory"}>
                {this.state.liquorClicked ? LiquorCategory.map((item) => { 
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


            <li className="category" onClick={this.clickHandler}><p>Prepared Foods</p> 
              <ul className={this.state.preparedfoodClicked ? "active" : "subcategory"}>
                {this.state.preparedfoodClicked ? PreparedfoodCategory.map((item) => { 
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


            <li className="category" onClick={this.clickHandler}><p>Other</p> 
              <ul className={this.state.otherClicked ? "active" : "subcategory"}>
                {this.state.otherClicked ? OtherCategory.map((item) => { 
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

            
          </ul>
        </div>
        <ShopMain item={this.state.filteredItem} />  
      </div>
    )
  }
}



export default Shop



