import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log("Body Rendering in Fetch");

    //Optional Chaining
    setListofRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurants(filteredList);
            console.log("Top Restaurants Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/*Whenever we are looping over an items, we must and should use "key" , we can use "index" also, but not recommended*/}

        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
