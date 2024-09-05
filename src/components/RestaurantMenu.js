import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState();

  //This is a custom hook
  const resInfo = useRestaurantMenu(resId);

  {
    /* We have created our own custom hook (useRestaurantMenu) for better modularity, for better testing, better readability.

   useEffect(() => {
     fetchInfo();
   }, []);

   const fetchInfo = async () => {
     const data = await fetch(MENU_API + resId);

     const json = await data.json();
     console.log(json);

     setResInfo(json.data);
   };
   */
  }

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-4 text-2xl">{name}</h1>
      <p className="text-lg font-semibold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="text-sm font-semibold">{avgRating} Stars</p>
      {/* Categories Accordian */}

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
