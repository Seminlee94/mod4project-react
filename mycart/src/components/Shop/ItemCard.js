import React from "react"

const ItemCard = (props) => {
    return (
        <div className="item-card" onClick={()=>props.itemClickHandler(props.item)}>
            <img src={props.item.image} width="100%" height="175px" displat="block" />
            <strong><p className="item-card-price">${props.item.price}</p></strong>
            <h5 className="item-card-name">{props.item.name}</h5>
        </div>
    )
}

export default ItemCard

