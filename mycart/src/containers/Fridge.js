import React from 'react'
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
// import MoreButton from "../components/Home/MoreButton.js";

class Fridge extends React.Component {

  filter = (Category) => {
    let filteredBakery = this.props.item.filter(item => item.category===Category)
    return filteredBakery.map(el => <FridgeItem item={el} />) 
  }

  render() {
    return (
      <div className="fridge-container">

        <div className="fridge-container-left">

          <div className="fridge-shelf">
            <div className="fridge-category">Bakery</div>
            <div className="fridge-item-card">{this.filter("Bread")}</div> 
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Produce</div>
            <div className="fridge-item-card">{this.filter("Produce")}</div> 
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Meat</div>
            <div className="fridge-item-card">{this.filter("Meat")}</div> 
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Seafood</div>
            <div className="fridge-item-card">{this.filter("Seafood")}</div> 
          </div>

        </div>

        <div className="fridge-blank"></div>

        <div className="fridge-container-right">
          <div className="fridge-shelf">
              <div className="fridge-category">Cheese</div>
              <div className="fridge-item-card">{this.filter("Cheese")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Liquors</div>
              <div className="fridge-item-card">{this.filter("Liquors")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Prepared Food</div>
              <div className="fridge-item-card">{this.filter("PreparedFood")}</div> 
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Other</div>
              <div className="fridge-item-card">{this.filter("Other")}</div> 
            </div>
        </div>
      </div>
    )
  }

}

export default Fridge