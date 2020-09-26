import React from "react"
import ItemCard from "./ItemCard.js"

class ShopMain extends React.Component{

      items = () => {
      return this.props.item.map(item => <ItemCard key={item.id} item={item} itemClickHandler={this.props.itemClickHandler} /> )
  }

    render() {

        return(
            <div className="item-container">
                {this.items()}
            </div>
        )
    }
}

export default ShopMain