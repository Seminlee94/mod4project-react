import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const routes = [
{
    path: "/Department/Meat",
    sidebar: () => "",
    main: () => <h2>afdaf</h2>
},
{
    path: "/Department/Bakery",
    sidebar: () => "",
    main: () => <h2>Bakery</h2>
},
{
    path: "/Department/Seafood",
    sidebar: () => "",//<div>Seafood!</div>,
    main: () => <h2>Seafood</h2>
},
{
    path: "/Department/Produce",
    sidebar: () => "",
    main: () => <h2>Produce</h2>
},
{
    path: "/Department/Cheese",
    sidebar: () => "",
    main: () => <h2>Cheese</h2>
},
{
    path: "/Department/Prepared Foods",
    sidebar: () => "",
    main: () => <h2>Prepared Foods</h2>
},
{
    path: "/Department/liquors",
    sidebar: () => "",
    main: () => <h2>Wine, Beer and Spirits</h2>
}
];
  

class Departments extends React.Component {

    render(){
        return(

            <Router>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    padding: "10px",
                    width: "auto",
                    background: "#f0f0f0"
                  }}
                >
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <Link to="/Department/Meat">Meat</Link>
                    </li>
                    <li>
                      <Link to="/Department/Bakery">Bakery</Link>
                    </li>
                    <li>
                      <Link to="/Department/Seafood">Seafood</Link>
                    </li>
                    <li>
                      <Link to="/Department/Produce">Produce</Link>
                    </li>
                    <li>
                      <Link to="/Department/Cheese">Cheese</Link>
                    </li>
                    <li>
                      <Link to="/Department/Prepared_foods">Prepared Foods</Link>
                    </li>
                    <li>
                      <Link to="/Department/liquors">Wine, Beer & Spirits</Link>
                    </li>
                  </ul>
        
                  <Switch>
                    {routes.map((route, index) => (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                      />
                    ))}
                  </Switch>
                </div>
        
                <div style={{ flex: 1, padding: "10px" }}>
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
}

export default Departments