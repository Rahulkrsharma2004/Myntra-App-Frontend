import React from "react";
import Cart from "../../Components/Cart/Cart";

const Bag = () => {
  const login = false;
  if (!login) {
    return <Cart />;
  }
  return <div>Bag</div>;
};

export default Bag;