import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;
  //console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="border-b-2 border-blue-100 m-4 p-2 text-left"
        >
          <div className="flex justify-between mb-6">
            <div className="w-10/12">
              <div className=" font-medium text-base py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price / 100}</span>
              </div>
              <p className="  text-xs text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12">
              <div className="absolute ml-8 mt-[68px] pt-2">
                <button
                  className="bg-pink-50 rounded-lg p-2 font-medium"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="pl-3 rounded-xl"
                alt={item.card.info.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
