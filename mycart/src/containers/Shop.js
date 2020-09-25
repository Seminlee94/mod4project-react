import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import "../components/Shop/shop.css";
import { ShopCategory } from "../components/Shop/ShopCategory.js";


class Shop extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked
    }))
  }

  render() {
    return(
      <div className="dd-wrapper" style={{ display: "flex" }}>
        <div
          className="dd-category"
          style={{
            padding: "10px",
            width: "auto",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {ShopCategory.map((item,index) => {
              return (
                <li className="category" key={index} >
                   <p className={item.cName} onClick={this.clickHandler}>
                    {item.title}
                  </p> 
                  <ul className={this.state.clicked ? "active" : "subcategory" } >
                      <li>
                          adfds
                      </li>
                      <li>
                         afaewfe
                      </li>
                      <li>
                          re23r
                      </li>
                  </ul>
                </li>
              )
            })}
            
          </ul>
        </div>
      </div>
    )
  }
}

export default Shop


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

