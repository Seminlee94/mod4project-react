import React from "react";
// import navFridge from "../components/Navbar/navFridge"
// import FridgeButton from "../Home/FridgeButton";
import TrashCan from "../Fridge/trashcan.js";
// import Button from "react-bootstrap/button"
const ItemRightCard = (props) => {
  return (
    <div className="item-right-card">
      <img
        src={props.item.image}
        alt={props.item.name}
        style={{ width: "70px", height: "50px", marginLeft: "5px" }}
      />
      {/* <div className="item-right-price">${props.item.price}</div> */}

      <div className="item-right-buttons">

        <button className="item-right-card-add" 
          onClick={() => props.addToFridge(props.cartId, props.item.id) }
          item={props.item.id}
          style={{ height: "20", width: "20", marginRight: "0" }}
          >
          <svg
      id="Capa_1"
      enable-background="new 0 0 512 512"
      height="20"
      viewBox="0 0 512 512"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g>
          <g>
            <path d="m177.325 98.816c-4.142 0-7.5-3.357-7.5-7.5v-12c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12c0 4.143-3.358 7.5-7.5 7.5z" />
          </g>
          <g>
            <path d="m256 127.993c-13.191 0-23.922-11.608-23.922-25.877s10.731-25.877 23.922-25.877 23.922 11.608 23.922 25.877-10.731 25.877-23.922 25.877zm0-36.754c-4.92 0-8.922 4.879-8.922 10.877s4.002 10.877 8.922 10.877 8.922-4.879 8.922-10.877-4.002-10.877-8.922-10.877z" />
          </g>
          <g>
            <path d="m334.675 98.816c-4.142 0-7.5-3.357-7.5-7.5v-12c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12c0 4.143-3.358 7.5-7.5 7.5z" />
          </g>
        </g>
        <g>
          <path d="m386 0h-260c-26.191 0-47.5 21.309-47.5 47.5v225c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-77.5h226.175c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-226.175v-132.5c0-17.921 14.58-32.5 32.5-32.5h260c17.92 0 32.5 14.579 32.5 32.5v132.5h-68.825c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h68.825v229.5c0 17.921-14.58 32.5-32.5 32.5h-260c-17.92 0-32.5-14.579-32.5-32.5v-122c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v122c0 23.639 17.36 43.295 40 46.902v3.098c0 20.678 16.822 37.5 37.5 37.5s37.5-16.822 37.5-37.5v-2.5h125v2.5c0 20.678 16.822 37.5 37.5 37.5s37.5-16.822 37.5-37.5v-3.098c22.64-3.607 40-23.263 40-46.902v-377c0-26.191-21.309-47.5-47.5-47.5zm-207.5 474.5c0 12.406-10.093 22.5-22.5 22.5s-22.5-10.094-22.5-22.5v-2.5h45zm177.5 22.5c-12.407 0-22.5-10.094-22.5-22.5v-2.5h45v2.5c0 12.406-10.093 22.5-22.5 22.5z" />
          <path d="m156 255h10c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-10c-9.649 0-17.5 7.851-17.5 17.5v60c0 9.649 7.851 17.5 17.5 17.5h10c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-10c-1.378 0-2.5-1.121-2.5-2.5v-60c0-1.379 1.122-2.5 2.5-2.5z" />
        </g>
      </g>
    </svg>
        </button>  
        
        <button className="item-right-card-delete" onClick={() => props.deleteHandler(props.cartId, props.item.id)}>
          {<TrashCan style={{ height: "20", width: "20", marginRight: "0" }} />}
        </button>
      </div>
      
      
    </div>
  );
};

export default ItemRightCard;
