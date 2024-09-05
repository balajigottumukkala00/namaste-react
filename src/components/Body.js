import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  //console.log("Body Rendered");
  //console.log(listofRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //console.log("Body Rendering in Fetch");

    //Optional Chaining
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>Please check your Internet Connection!! Something went wrong</h1>
    );

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="p-4 m-4">
          <input
            data-testid="searchInput"
            type="text"
            className="border-2 border-solid border-blue-300 rounded"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="button ml-4 bg-blue-500 px-2 py-1 text-white font-normal rounded"
            onClick={() => {
              // Filter the restaurants with search Input and updates the UI accordingly
              //get the searchText from local state Variable (useState)
              console.log(searchText);

              const filteredRestaurant = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            data-testid="topRated"
            className="bg-green-200 px-4 rounded-xl py-2 text-gray-900"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredRestaurants(filteredList);
              //console.log("Top Restaurants Clicked");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex items-center p-4 m-4">
          <label>UserName : </label>
          <input
            className="border border-black ml-2 p-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/*Whenever we are looping over an items, we must and should use "key" , we can use "index" also, but not recommended*/}

        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* condition is if restaurant is open then we can make label as open */}
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
