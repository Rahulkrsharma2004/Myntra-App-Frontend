import React from "react";
import Login from "../../Components/Login/Login";

const Orders = () => {
  const login = false;
  if (!login) {
    return <Login />;
  }
  return <div>Orders</div>;
};

export default Orders;