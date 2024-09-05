import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch an clear cart action.
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-2xl mb-6">Card</h1>
      <div className="w-6/12 m-auto border border-purple-400 rounded-xl">
        <button
          className="m-2 p-2 bg-orange-500 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItems} />

        {cartItems.length === 0 && (
          <h1 className="py-4 font-bold text-2xl text-sky-500">
            Cart is Empty. Add some Items to the cart!!🛒
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
