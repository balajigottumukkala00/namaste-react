import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header render");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // We are subscribing to the state using a selector hook.
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  // useEffect(() => {
  //console.log("useEffect Called");
  // });

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg hover:bg-green-200 sm:bg-gray-300">
      <div className="w-56">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-2 font-bold cursor-pointer">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-2"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-2 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
