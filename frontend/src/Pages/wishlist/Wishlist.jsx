import React, { useContext, useState, useEffect } from "react";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import axios from "axios";

const Wishlist = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const [wishData, setWishData] = useState([]);

  if (!isAuth) {
    return <Login />;
  }

  const showWishData = async () => {
    try {
      const res = await axios.get(
        `https://myntra-app-backend-production.up.railway.app/wishlists/`,
        wishData,
        { withCredentials: true }
      );
      console.log(res.data.myWishlist);
      setWishData(res.data.myWishlist);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    showWishData();
  }, []);

  const handleMoveToBag = async (id) => {
    try {
      const addToBagRes = await axios.post(
        `https://myntra-app-backend.vercel.app/carts/add/${id}`,
        { withCredentials: true }
      );

      const deleteFromWishlistRes = await axios.delete(
        `https://myntra-app-backend.vercel.app/wishlists/delete/${id}`
      );

      if (
        addToBagRes.data.message === "Product Added Successfully" &&
        deleteFromWishlistRes.data.message === "Item was removed from Wishlist!"
      ) {
        alert("Product moved to Bag");
        setWishData((prevWishData) =>
          prevWishData.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="wishlistMainDiv">
        <div className="blanksItem">
          <h1>YOUR WISHLIST IS EMPTY</h1>
          <br />
          <h3>
            Add items that you like to your wishlist. Review them anytime and
            easily move them to the bag.
          </h3>
          <br />
          <img src="" alt="" />
          <br />
          <Link to="/">
            <button>CONTINUE SHOPPING</button>
          </Link>
        </div>
        <div className="fillItem">
          {wishData.map((ele) => (
            <div className="maincart">
              <div className="itemBag">
                <div className="bagImage">
                  <img
                    src={ele.image}
                    alt="ProductImage"
                    className="imagebag"
                  />
                </div>
                <div className="itemDetails">
                  <h4>{ele.brand}</h4>
                  <p>{ele.title}</p>
                  <div>Rs. {ele.price}</div>
                  <div className="sizeOptions">
                    {ele.sizes.map((size, index) => (
                      <span
                        key={index}
                        style={{
                          marginRight: "20px",
                          color: "red",
                          cursor: "pointer",
                        }}>
                        {size}
                      </span>
                    ))}
                  </div>
                  <div>
                    <button
                      className="deleteCart"
                      onClick={() => handleMoveToBag(ele._id)}>
                      MOVE TO BAG
                    </button>
                    <button
                      className="deleteCart"
                      onClick={() => handleDeleteWish(ele._id)}>
                      REMOVE ITEM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
