import React from "react";
import "./Product.css";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const {
    images,
    rating,
    count,
    brand,
    title,
    price,
    off_price,
    discount,
    _id: id,
  } = product;
  return (
    <div className="itemBox">
      <Link color="a" to={`/product/${id}`}>
        <div className="itemImage">
          <img src={images.image1} alt="ProductImage" />
          <p>
            {rating} <RiStarSFill className="itemStars" /> | {count}
          </p>
        </div>
        <div className="itemDetails">
          <h4>{brand}</h4>
          <p>{title}</p>
          <div>
            Rs. {price} <s>Rs. {off_price}</s> <span>({discount}% OFF)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;