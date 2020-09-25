import React from 'react'
import Item from "../components/Home/Item.js";
import "../components/Fridge/Fridge.css";
// import AddForm from "../components/Fridge/AddForm.js";

class Fridge extends React.Component {

  items = () => {
    return this.props.item.map(item => <Item item={item} /> )
  }


  render() {
    return (
      <div className="fridge-container">

        <div className="fridge-container-left">
          {/* <AddForm /> */}
          {/* <div>{this.items()}</div> */}
          <div className="fridge-shelf"><p>Bakery</p></div>
          <div className="fridge-shelf"><p>Produce</p></div>
          <div className="fridge-shelf"><p>Meat</p></div>
          <div className="fridge-shelf"><p>Seafood</p></div>
        </div>

        <div className="fridge-blank"></div>

        <div className="fridge-container-right">
          <div className="fridge-shelf"><p>Liquors</p></div>
          <div className="fridge-shelf"><p>Prepared Foods</p></div>
          <div className="fridge-shelf"><p>Other</p></div>
        </div>
      </div>
    )
  }

}

export default Fridge