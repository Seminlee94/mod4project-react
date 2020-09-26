import React from 'react'
import "../components/Shop/shop.css";
import ShopSideNav from '../components/Shop/ShopSideNav';
import ShopMain from '../components/Shop/ShopMain';


class Shop extends React.Component {

  render(){
    return(
      <div className="shop-container" >
        <ShopSideNav />
        <ShopMain />
      </div>
    )
  }
}


export default Shop



