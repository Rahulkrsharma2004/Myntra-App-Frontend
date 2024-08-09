import { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Bag.css";
import Cart from "../../Components/Cart/Cart";
import { Context } from "../../Contexts/AuthContext";

const Bag = () => {
  const { isAuth, setTotalItems } = useContext(Context);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (isAuth) {
      const showCartData = async () => {
        try {
          const res = await axios.get(
            `https://myntra-app-backend.vercel.app/carts/`,
            { withCredentials: true }
          );
          const cartData = res.data.myCart;
          console.log(res.data.myCart.length);
          const countData = res.data.myCart.length;
          setCartData(cartData);
          setTotalItems(countData);
        } catch (error) {
          console.log("error", error);
        }
      };

      showCartData();
    }
  }, [isAuth]);

  const handleDeleteBag = async (id) => {
    try {
      const deleteFromBag = await axios.delete(
        `https://myntra-app-backend.vercel.app/carts/delete/${id}`,
        { withCredentials: true }
      );

      console.log(deleteFromBag);

      if (deleteFromBag.data.message === "Item is removed from cart!") {
        alert("Product Deleted !!");
        setCartData((prevBagData) =>
          prevBagData.filter((item) => item._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!isAuth) {
    return <Cart />;
  }

  return (
    <div className="mainDivCart">
      {cartData.map((ele) => (
        <div key={ele._id} className="maincart">
          <div className="itemBag">
            <div className="bagImage">
              <img src={ele.image} alt="ProductImage" className="imagebag" />
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
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <div style={{ margin: "auto" }}>
                <button
                  className="deleteItemfromBag"
                  onClick={() => handleDeleteBag(ele._id)}
                >
                  DELETE ITEM
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bag;
