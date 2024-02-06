import React from "react";
import Login from "../../Components/Login/login";
const Wishlist = () => {
  const login = false;
  if (!login) {
    return <Login/>;
  }

  return <div>Wishlist</div>;
};

export default Wishlist;