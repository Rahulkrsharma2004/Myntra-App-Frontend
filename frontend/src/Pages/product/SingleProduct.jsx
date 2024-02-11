import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Slider } from "antd";
import "./SingleProduct.css";
import { RiStarSFill } from "react-icons/ri";
import { BiHeart, BiDetail } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState(null);
  const [proQuantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  // console.log(product)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let response = await axios.get(`https://myntra-app-backend-production.up.railway.app/product?_id=${id}`);
        response=response.data.products.filter(ele=>{
            console.log(id,"line 23")
            console.log(ele._id,"line 24")
          if(id == ele._id){
            
            return response
            
          }
        })
        console.log(response,"line 26")
        setProduct(response);
        // console.log(response.data.products)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return "Loading...";
  }

  if (!product) {
    return "Product not found";
  }

  return (
    <div className="singleProComponent">
      <div className="singleProNavigation"></div>
      <div className="singlePro">
        <div className="singleProGallery">
          <img src={product[0].image} alt="Product" />
        </div>
        <div className="singleProDetails">
          <div className="singleProName">
            <h2>{product[0].brand}</h2>
            <h2>{product[0].title}</h2>
            <p>
              <RiStarSFill className="itemStars" /> | {product.reviews} Reviews
            </p>
          </div>
          <div className="singleItemDetails">
            <div>
              Rs. {product[0].price} <s>Rs. {product.oldPrice}</s>
              <span>({product.discount}% OFF)</span>
            </div>
            <p>Inclusive of all taxes</p>
            <h5 style={{ color: product.inStock ? "red" : "#14958f" }}>
              Status : {product.inStock ? "Out Of Stock" : "In Stock"}
            </h5>
          </div>
          <div className="sizeInfo">
            <h3>SIZE:{product[0].sizes}</h3>
          </div>
          <div className="singleProQuantity">
            <p>Select Quantity : {proQuantity}</p>
            <Slider
              defaultValue={1}
              max={product.inStock ? 20 : 0}
              onChange={setQuantity}
            />
          </div>
          <div className="singleProButtons">
            <button className="addToCart">
              <HiOutlineShoppingBag className="singleProIcons" />
              {product.alreadyAdded ? "GO TO BAG" : "ADD TO BAG"}
            </button>
            <button className="addToList">
              <BiHeart className="singleProIcons" />
              WISHLIST
            </button>
          </div>
          <div className="singleProDescription">
            <h3>
              PRODUCT DETAILS <BiDetail />
            </h3>
            <p>{product[0].description}</p>
            {product.size && <h4>Size: {product.size}</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
