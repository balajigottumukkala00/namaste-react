import { useState } from "react";
import ItemList from "./ItemList";

//Children component of RestaurantMenu
const RestaurantCategory = (props) => {
  //const [showItems, setShowItems] = useState(false);
  const { data, showItems, setShowIndex } = props;
  //console.log(data);

  const handleClick = () => {
    setShowIndex();
    //console.log("clicked");

    //setShowItems(!showItems);
  };
  return (
    <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4  ">
      <div
        className="font-bold flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {/* {Accordian Header} */}
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* {Accordian Body} */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
