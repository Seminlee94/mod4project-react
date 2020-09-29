import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../components/Shop/shop.css";
import ShopMain from "../components/Shop/ShopMain";
import ShopRight from "../components/Shop/ShopRight";
import { BreadCategory } from "../components/Shop/Subcategory-lists/Bread.js";
import { MeatCategory } from "../components/Shop/Subcategory-lists/Meat.js";
import { CheeseCategory } from "../components/Shop/Subcategory-lists/Cheese.js";
import { ProduceCategory } from "../components/Shop/Subcategory-lists/Produce.js";
import { SeafoodCategory } from "../components/Shop/Subcategory-lists/Seafood.js";
import { LiquorCategory } from "../components/Shop/Subcategory-lists/Liquor.js";
import { PreparedfoodCategory } from "../components/Shop/Subcategory-lists/Preparedfood.js";
import { OtherCategory } from "../components/Shop/Subcategory-lists/Other.js";

class Shop extends React.Component {
  state = {
    filteredItem: [],
    userCartArray: [],
    itemArray: [],
    cartItemArray: [],
    clicked: false
  };

  itemClickHandler = (item) => {
    // console.log("clicked: ", id);
    // console.log("clicked");
    // let newArray = this.state.cartItemArray;
    // let foundObj = this.state.itemArray.find(
    //   (el) => el.id === parseInt(id)
    // );
    // if (newArray.includes(foundObj) === false) {
    //   this.setState(() => ({
    //     cartItemArray: [...newArray, foundObj],
    //   }));
    // }
    fetch("http://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({
        cart_id: 1,
        item_id: item.id
      })
    })
    .then(resp => resp.json())
    .then(data => this.setState(()=> ({
      userCartArray: [...this.state.userCartArray, data]
    }))
    )
  };

  componentDidMount() {
    const urls = [
      "http://localhost:3000/api/v1/items",
      "http://localhost:3000/api/v1/user_carts/1",
    ];
    // const promises = urls.map((url) => fetch(url));
    Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json()))).then(
      (data) =>
        this.setState({
          itemArray: data[0],
          userCartArray: data[1].cart.cart_item,
        })
    );
  }

  shopSideBarClicker = (e) => {
    let filteredArray = this.state.itemArray.filter(
      (item) => item.sub_category === e.target.textContent
    );
    this.setState(() => ({
      filteredItem: [...filteredArray],
      clicked: true
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
                <ListGroup.Item key={item.id} onClick={this.shopSideBarClicker} style={{ cursor:"pointer" }} >
                  {item.subcategory}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    ));

    return (
      <div className="dd-wrapper" style={{ display: "flex" }}>
        <div style={{ width: "250px" }}>{ShopMap}</div>

        <ShopMain
          itemArray={this.state.itemArray}
          item={this.state.filteredItem}
          itemClickHandler={this.itemClickHandler}
          clicked={this.state.clicked}
        />
        <ShopRight
          // moveToFridge={this.props.moveToFridge}
          cartItemArray={this.state.userCartArray}
        />
      </div>

    );
  }
}

export default Shop;
