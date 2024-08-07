// import React from "react";
import axios from "axios";
import "./ProductStr.css";
import { Link } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";
import { useContext } from "react";

const ProductStr = ({ product }) => {
  const { image, brand, title, price, _id: id } = product;

  const { isAuth, setIsAuth } = useContext(Context);

  const handleAddWish = async (id) => {
    if (!isAuth) {
      alert("You are not Login !!");
    } else {
      try {
        const res = await axios.post(
          `https://myntra-app-backend.vercel.app/wishlists/add/${id}`,
          { withCredentials: true }
        );
        console.log(res);
        if (res.data.message == "Product Added Successfully in Wishlist") {
          alert("Product Added Successfully in Wishlist");
        }
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <div className="itemBox">
      <Link color="a" to={`/product/${id}`}>
        <div className="itemImage">
          <img src={image} alt="ProductImage" />
        </div>
      </Link>
      <div className="itemDetails">
        <h4>{brand}</h4>
        <p>{title}</p>
        <div>Rs. {price}</div>
        <div className="btnDiv">
          <button
            className="AddToWishlistBtn"
            onClick={() => handleAddWish(id)}
          >
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductStr;
