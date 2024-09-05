import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props; // We should pass the key to destructure i.e resData not resObj
  //console.log(resData);

  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-2 bg-gray-100 w-60 h-[500px] rounded-xl hover:bg-gray-200"
    >
      <img
        className="rounded-xl"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-base">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4 className="font-medium"> User: {loggedInUser}</h4>
    </div>
  );
};

//Higher Order Components
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute ml-2 p-2 bg-green-400 text-white rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
