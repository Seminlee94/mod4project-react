import React from "react"
import ItemCard from "./ItemCard.js"

class ShopMain extends React.Component{

      filtered = () => {
      return this.props.item.map(item => <ItemCard key={item.id} item={item} /> )
  }

    render() {

        return(
            <div className="Item-card">
                {this.filtered()}
            </div>
        )
    }
}

export default ShopMain