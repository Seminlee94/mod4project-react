import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import "../components/Shop/shop.css";
import { ShopCategory } from "../components/Shop/ShopCategory.js";
import ShopSubcategory from '../components/Shop/ShopSubcategory.js';

class Shop extends React.Component {
  filter = (Category) => {
    let filtered = this.props.item.filter(item => item.category === Category);
    return filtered.map(el => console.log(el))
  };

  render() {
    const ShopArray = [
      { category: "Bakery", subcategory: this.filter("Bread") },
      { category: "Produce", subcategory: this.filter("Produce") },
      { category: "Meat", subcategory: this.filter("Meat") },
      { category: "Seafood", subcategory: this.filter("Seafood") },
      {
        category: "Prepared Foods",
        subcategory: this.filter("Prepared Foods"),
      },
      { category: "Other Departments", subcategory: this.filter("Other Departments") },
      { category: "Cheese", subcategory: this.filter("Cheese") },
    ];

    const shopCategoryContainer = ShopArray.map(({category, subcategory}) => (
      <div className="shop-category">
        <div className="shop-subcategory">{category}</div>
        <ShopSubcategory item={subcategory} />
      </div>
    ));

    return (
      <div className="fridge-container">
        <div className="fridge-container-left"> </div>
        {shopCategoryContainer}

      </div>
    );
  }
}
export default Shop;







// class Shop extends React.Component {

//   state = {
//     itemArray: [],
//     clicked: false,
//     meatArray:[]
//   }

//   componentDidMount() {
//     fetch("http://localhost:8000/items")
//     .then((res) => res.json())
//     .then((data) => this.setState({ itemArray: data }));
//   }


//   clickHandler = (e) => {
//     console.log(this.state)
//     console.dir(e.target)
//     if(e.target.textContent==="Meat"){
//       let newArray = [...this.state.itemArray]
//       let foundArray = newArray.filter(el => el.category==="Meat")
//       this.setState((previousState) => ({
//         clicked: !previousState.clicked,
//         meatArray: foundArray
//       }))
//     }
//   }

  

//   render() {
//     return(
//       <div className="dd-wrapper" style={{ display: "flex" }}>
//         <div
//           className="dd-category"
//           style={{
//             padding: "10px",
//             width: "auto",
//             background: "#f0f0f0"
//           }}
//         >
//           <ul style={{ listStyleType: "none", padding: 0 }}>
//             {ShopCategory.map((item) => {
//               return (
//                 <li className="category" >
//                   {/* <ShopSubcategory className={item.cName} item={item} onClick={this.clickHandler} /> */}
//                    <p className={item.cName} onClick={this.clickHandler}>
//                     {item.category} 
//                   </p> 
//                   <ul className={this.state.clicked ? "active" : "subcategory" } >
                  
//                       <li>                        
//                         <ShopSubcategory item={this.state.meatArray}/>
//                       </li>

//                   </ul>
//                 </li>
 
//               )
//             })}
            
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default Shop






          /* <Switch>
            {routes.map((route, index) => (
              <RouteWithSubRoutes
                key={index}
                {...route}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px", width: "auto", background: "#f0f0f0" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
       </div>
    </Router>
  ) 
}

function RouteWithSubRoutes(route) {
  return(
    <Route
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
    />
  )
}

function Meat({ routes }) {
  return (


    <div>
      <ul>
        <li>
          <Link to="shop/meat/beef">Beef</Link>
        </li>
      </ul>


            <div style={{ flex: 1, padding: "10px" }}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} 
            children={<route.main/> } />
            ))}
        </Switch>
      </div>
    </div>
  );
}

function Beef() {
  return <p>Beef</p>
} */

