import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
const cart = () => {
  return (
    <div className="notLogin">
      <img src="./assets/cart.png" alt="img" />
      <h3>Het, It feels so light !</h3>
      <p>There is nothing in your bag. Lets add something.</p>
      <Link to="/wishlist">
        <button>ADD ITEMS FROM WISHLIST</button>
      </Link>
    </div>
  );
};

export default cart;