import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./styles.css";
import { CartContext } from "../Context";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
