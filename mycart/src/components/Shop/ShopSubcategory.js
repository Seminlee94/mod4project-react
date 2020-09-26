import React from 'react'
// import "../components/Fridge/Fridge.css";

// class ShopSubcategory extends React.Component {

//     // state = {
//     //     clicked: false
//     // }

//     // clickHandler = () => {
//     //     this.setState((previousState) => ({
//     //       clicked: !previousState.clicked
//     //     }))
//     // }
    
//   render() {
//     const subcatArray = this.props.item.subcategory
//     return(
//       <p>{this.props.item}</p>
//     )     
//  }
// }

const ShopSubcategory = (props) => {
  console.log("here")
  // debugger
  return (
    <div>
      <p>{props.sub_category}</p>
    </div>
  );

}

export default ShopSubcategory;