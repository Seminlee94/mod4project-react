import React from "react"
import ItemCard from "./ItemCard.js"
import Search from "./Search.js"


class ShopMain extends React.Component{

    state = {
        searchTerm: "",
        itemArray: []
    }
    
    items = () => {
        return this.props.item.map(item => <ItemCard key={item.id} item={item} itemClickHandler={this.props.itemClickHandler} /> )
    }

    showItemArray() {
        let findItems = this.state.itemArray.filter(
            (item) =>
              item.name
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase()) ||
              item.category
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase()) ||
              item.sub_category
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
          );

        return findItems.map(item => <ItemCard item={item} />)
    }

    submitHandler = (term) => {
        this.setState({
            searchTerm: term.searchTerm
        })
    }

    
    render() {
        this.state.itemArray = this.props.itemArray
        console.log(this.state.itemArray)

        return(
            <div className="shop-main">
                <div className="item-search">
                    <Search className="searchBar" searchTerm={this.state.searchTerm} search={this.search} submitHandler={this.submitHandler}  />
                </div>
                <div className="item-container">
                    {this.state.searchTerm === "" ? this.items() : this.showItemArray()}
                </div>

            </div>
        )
    }
}

export default ShopMain