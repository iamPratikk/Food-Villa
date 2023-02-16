import { useContext, useState } from "react";
import { LOGO_URL } from "../Config";
import { Link } from "react-router-dom";
import img from "../Assets/foodVilla-logo.png";
import userContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import store from "../Utils/Store";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center  bg-orange-700 h-24 ">
      <Link to="/">
        <img className="w-20 mx-8 " src={img} />
      </Link>
      <div className="flex ">
        <ul className="flex items-center px-2 mr-4 ">
          <Link to="/ ">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-4">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-4">Cart- {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
