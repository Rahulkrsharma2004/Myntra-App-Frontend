import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./Bag.css";
import Cart from "../../Components/Cart/Cart";
import { Context } from "../../Contexts/AuthContext";
import { MdClose } from "react-icons/md";

const Bag = () => {
  const { isAuth, setIsAuth } = useContext(Context);
  const [bagData, setBagData] = useState([]);
  // const [total, setTotal] = useState(0)

  // console.log("total",total)
  // console.log("setTotal",setTotal)

  if (!isAuth) {
    return <Cart />;
  }

  const showCartData = async () => {
    try {
      const res = await axios.get(
        `https://myntra-app-backend.vercel.app/carts/`,
        bagData,
        { withCredentials: true }
      );
      console.log(res);
      setBagData(res.data.myCart);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    showCartData();
  }, []);

  // useEffect(()=>{

  // let totalCount = 0;
  // bagData.forEach(ele => {
  //   totalCount += ele.Array.length;
  // });
  // setTotal(totalCount);

  // },[bagData])

  let totalItems = 0;
  bagData.forEach((item) => {
    totalItems += item.Array;
  });

  const handleDelete = async (_id) => {
    try {
      const res = await axios.delete(
        `https://myntra-app-backend.vercel.app/carts/delete/${_id}`,
        {},
        { withCredentials: true }
      );
      console.log(res);
      setBagData((prevBagData) =>
        prevBagData.filter((item) => item._id !== _id)
      );
      // if (res.data.message == "Item is removed from cart!") {
      //   alert("Item Deleted from Cart");
      // }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="mainDivCart">
      {bagData.map((ele) => (
        <div className="maincart">
          <h5>Item Count:{ele.totalItems}</h5>
          <div className="itemBag">
            <br />
            <div className="bagImage">
              <img src={ele.image} alt="ProductImage" className="imagebag" />
              <MdClose className="crossCut" onClick={() => handleDelete(ele._id)}/>
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
                {/* <button
                  className="deleteCart"
                  onClick={() => handleDelete(ele._id)}>
                  DELETE ITEM
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bag;
