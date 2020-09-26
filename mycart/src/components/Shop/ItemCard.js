import React from "react"

const ItemCard = (props) => {
    return (
        <div className="card">
            <h3>{props.item.name}</h3>
            <img src={props.item.image} />
        </div>
    )
}

export default ItemCard