import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import wishlist from "../../assets/wishimg.jpg"
const login = () => {
  return (
    <div className="notLogin">
      <h3>PLEASE LOG IN</h3>
      <p>Login to view items in your wishlist.</p>
      <img src={wishlist} alt="img" />
      <Link to="/signup">
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default login;