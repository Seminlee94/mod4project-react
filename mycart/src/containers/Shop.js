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
    cartItem: [],
    clicked: false,
    meatClicked: false,
    breadClicked: false,
    produceClicked: false,
    seafoodClicked: false,
    cheeseClicked: false,
    preparedfoodClicked: false,
    liquorClicked: false,
    otherClicked: false,
  };

  componentDidMount() {
    fetch("http://localhost:3000/user_carts/1")
      .then(resp => resp.json())
      .then(data => this.setState(()=>({
        cartItem: data.cart.cart_item
      })))
  }

  clickHandler = (e) => {
    if (e.target.textContent === "Meat") {
      this.setState((previousState) => ({
        meatClicked: !previousState.meatClicked
      }));
    } else if (e.target.textContent === "Bread") {
      this.setState((previousState) => ({
        breadClicked: !previousState.breadClicked
      }));
    } else if (e.target.textContent === "Produce") {
      this.setState((previousState) => ({
        produceClicked: !previousState.produceClicked
      }));
    } else if (e.target.textContent === "Seafood") {
      this.setState((previousState) => ({
        seafoodClicked: !previousState.seafoodClicked
      }));
    } else if (e.target.textContent === "Cheese") {
      this.setState((previousState) => ({
        cheeseClicked: !previousState.cheeseClicked
      }));
    } else if (e.target.textContent === "Prepared Foods") {
      this.setState((previousState) => ({
        preparedfoodClicked: !previousState.preparedfoodClicked
      }));
    } else if (e.target.textContent === "Liquor") {
      this.setState((previousState) => ({
        liquorClicked: !previousState.liquorClicked
      }));
    } else if (e.target.textContent === "Other") {
      this.setState((previousState) => ({
        otherClicked: !previousState.otherClicked
      }));
    }
  };

  subclickHandler = (e) => {
    let filteredArray = this.props.itemArray.filter(
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
                <ListGroup.Item key={item.id} onClick={this.subclickHandler}>
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
          itemArray={this.props.itemArray}
          item={this.state.filteredItem}
          itemClickHandler={this.props.itemClickHandler}
          clicked={this.state.clicked}
        />
        <ShopRight
          itemArray={this.props.itemArray}
          moveToFridge={this.props.moveToFridge}
          itemClickedArray={this.state.cartItem}
        />
      </div>
    );
  }
}

export default Shop;
