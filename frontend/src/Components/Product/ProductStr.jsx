import React from "react";
import "./ProductStr.css";
import { Link } from "react-router-dom";

const ProductStr = ({ product }) => {
  const {
    image,
    brand,
    title,
    price,
    _id: id,
  } = product;

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
          <div>
            Rs. {price}
          </div>
          <div className="btnDiv">
            <button className="AddToWishlistBtn">ADD TO WISHLIST</button>
          </div>
          
        </div>
     
    </div>
   
  );
};

export default ProductStr;