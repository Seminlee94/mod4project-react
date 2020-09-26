import React from "react"
import ItemRightCard from "./ItemCard.js"

class ShopRight extends React.Component{

    items = () => {
        return this.props.item.map(item => <ItemRightCard key={item.id} item={item} /> )
    }

    render() {

        return(
            <div className="shop-right" >
                <h3>{this.items()}</h3>
            </div>
        )
    }
}

export default ShopRight