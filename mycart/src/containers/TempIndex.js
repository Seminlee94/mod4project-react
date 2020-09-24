import React from 'react'
import Item from '../components/Item'

const TempIndex = (props) => {

  const itemMapper = props.itemArray.map(i => (<Item item={i}/>))

  return (
       <div className="single-item">{itemMapper}</div> 
  )
}

export default TempIndex