import React from "react";
import FridgeItem from "../components/Fridge/FridgeItem.js";
import "../components/Fridge/Fridge.css";
// import MoreButton from "../components/Home/MoreButton.js";
import Shelf from "../components/Shelf";

class Fridge extends React.Component {
  filter = (Category) => {
    let filteredItems = this.props.item.filter(
      (item) => item.category === Category
    );
    return filteredItems.map((el) => <FridgeItem item={el} />);
  };

  render() {
    const fridgeLeftArray = [
      { category: "Bakery", shelf: this.filter("Bread") },
      { category: "Produce", shelf: this.filter("Produce") },
      { category: "Meat", shelf: this.filter("Meat") },
      { category: "Seafood", shelf: this.filter("Seafood") },
    ];
    const fridgeRightArray = [
      // { category: "Liqours", shelf: this.filter("Liqours") },
      {
        category: "PreparedFoods",
        shelf: this.filter("PreparedFoods"),
      },
      { category: "Other", shelf: this.filter("Other") },
      { category: "Cheese", shelf: this.filter("Cheese") },
    ];
    const fridgeLeft = fridgeLeftArray.map((category, shelf) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));
    const fridgeRight = fridgeRightArray.map((category, shelf) => (
      <div className="fridge-shelf">
        <div className="fridge-category">{category}</div>
        <Shelf category={shelf} />
      </div>
    ));

    return (
      <div className="fridge-container">
        <div className="fridge-container-left"> </div>
        {fridgeLeft}
        <div className="fridge-blank"></div>

        <div className="fridge-container-right"> </div>
        {fridgeRight}
      </div>
    );
  }
}
export default Fridge;

{
  /* 
          <div className="fridge-shelf">
            <div className="fridge-category">Bakery</div>

            <Shelf category={this.filterBakery()} />
            <div className="fridge-item-card">{this.filter("Bread")}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Produce</div>
            <div className="fridge-item-card">{this.filterProduce()}</div>
            <div className="fridge-item-card">{this.filter("Produce")}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Meat</div>
            <div className="fridge-item-card">{this.filterMeat()}</div>
            <div className="fridge-item-card">{this.filter("Meat")}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Seafood</div>
            <div className="fridge-item-card">{this.filterSeafood()}</div>
          </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Cheese</div>
              <div className="fridge-item-card">{this.filterCheese()}</div>
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Liquors</div>
              <div className="fridge-item-card">{this.filterLiquors()}</div>
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Prepared Food</div>
              <div className="fridge-item-card">
                {this.filterPreparedFood()}
              </div>
            </div>

            <div className="fridge-shelf">
              <div className="fridge-category">Other</div>
              <div className="fridge-item-card">{this.filterOther()}</div>
            </div>
            <div className="fridge-category">Cheese</div>
            <div className="fridge-item-card">{this.filter("Cheese")}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Liquors</div>
            <div className="fridge-item-card">{this.filter("Liquors")}</div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Prepared Food</div>
            <div className="fridge-item-card">
              {this.filter("PreparedFood")}
            </div>
          </div>

          <div className="fridge-shelf">
            <div className="fridge-category">Other</div>
            <div className="fridge-item-card">{this.filter("Other")}</div>
          </div>
        </div>
      </div> */
}
{
  /* ); */
}
{
  /* }
} */
}
