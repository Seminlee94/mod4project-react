import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../components/Shop/shop.css";
import ShopMain from "../components/Shop/ShopMain";
import ShopRight from "../components/Shop/ShopRight";
import OurShopRight from "../components/Shop/OurShopRight";
import { BreadCategory } from "../components/Shop/Subcategory-lists/Bread.js";
import { MeatCategory } from "../components/Shop/Subcategory-lists/Meat.js";
import { CheeseCategory } from "../components/Shop/Subcategory-lists/Cheese.js";
import { ProduceCategory } from "../components/Shop/Subcategory-lists/Produce.js";
import { SeafoodCategory } from "../components/Shop/Subcategory-lists/Seafood.js";
import { LiquorCategory } from "../components/Shop/Subcategory-lists/Liquor.js";
import { PreparedfoodCategory } from "../components/Shop/Subcategory-lists/Preparedfood.js";
import { OtherCategory } from "../components/Shop/Subcategory-lists/Other.js";
import { Redirect } from "react-router-dom";

class Shop extends React.Component {
  state = {
    filteredItem: [],
    clicked: false,
  };


  shopSideBarClicker = (e) => {
    let filteredArray = this.props.shopItemArray.filter(
      (item) => item.sub_category === e.target.textContent
    );
    this.setState(() => ({
      filteredItem: [...filteredArray],
      clicked: true,
    }));
  };

  render() {
    const ShopMapper = [
      { title: "Bread", category: BreadCategory },
      { title: "Meat", category: MeatCategory },
      { title: "Seafood", category: SeafoodCategory },
      { title: "Produce", category: ProduceCategory },
      { title: "Cheese", category: CheeseCategory },
      { title: "Liqour", category: LiquorCategory },
      { title: "PreparedFoods", category: PreparedfoodCategory },
      { title: "Other", category: OtherCategory },
    ];

    const ShopMap = ShopMapper.map(({ title, category }) => (
      <Accordion>
        <Card style={{ border: 0, marginBottom: "5px" }}>
          <Accordion.Toggle
            as={Button}
            variant="secondary"
            eventKey="0"
            style={{ textAlign: "left" }}
          >
            {title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              {category.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  onClick={this.shopSideBarClicker}
                  style={{ cursor: "pointer" }}
                >
                  {item.subcategory}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));

        return (
        
          <>
            {this.props.userId 
            
            ? 
            <div className="dd-wrapper" style={{ display: "flex" }}>

              <div className="sidebar">{ShopMap}</div>
              

                <ShopMain
                  itemArray={this.props.shopItemArray}
                  item={this.state.filteredItem}
                  itemClickHandler={this.props.itemClickHandler}
                  clicked={this.state.clicked}
                />

              
              <div className="shop-carts">

                {this.props.userCartArray.length > 0 ? (
                  <>
                    <h3>My Cart</h3>
                    <ShopRight

                      moveToFridge={this.props.moveToFridge}
                      userCartArray={this.props.userCartArray}
                      deleteHandler={this.props.deleteHandler}
                      />
                    </>

                  ) : null}

                {this.props.ourCartArray.length > 0 ? (

                  <>
                    <h3>Our Cart</h3>
                    <OurShopRight 

                      deleteHandler={this.props.deleteHandler}
                      ourCartArray={this.props.ourCartArray}
                      moveToFridge={this.props.moveToFridge}
                    
                    />

                  </>
                  ) : null}

              </div>
            </div>
            
            :

                <Redirect to="/login" />
            }

          </>
        );
      }
  
}

export default Shop;
