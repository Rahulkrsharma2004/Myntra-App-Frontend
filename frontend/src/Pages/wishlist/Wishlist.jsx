import React from "react";
// import "./Wishlist.css";
import Login from "../../Components/Login/Login";
const Wishlist = () => {
  const login = false;
  if (!login) {
    return <Login />;
  }

  return <div>Wishlist</div>;
};

export default Wishlist;