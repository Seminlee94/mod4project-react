import React from "react";
import Item from "../components/Home/Item";
import MoreButton from "../components/Home/MoreButton";
import LessButton from "../components/Home/LessButton";

const TempIndex = (props) => {
  // const itemMapper = props.itemArray.map((i) => <Item item={i} />);

  const catCount = props.catCount;
  const itemMapper = props.itemArray.map(
    (i, currentItemIndex) =>
      catCount <= currentItemIndex &&
      currentItemIndex < catCount + 4 && <Item item={i} />
  );

  return (
    <div className="single-item">
      <LessButton leftItems={props.leftItems} />
      <MoreButton moreItems={props.moreItems} />
      {itemMapper}
    </div>
  );
};

export default TempIndex;
