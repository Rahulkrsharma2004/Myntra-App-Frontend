import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSearch, BiUser, BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { Dropdown } from "antd";
import { Context } from "../../Contexts/AuthContext";

const navbar = () => {
  const [click, setClick] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(Context);

  const handleLogout = async () => {
    console.log("first")
    try {
      console.log("second")
      const response = await axios.post("http://localhost:8080/user/logout",{withCredentials : true})
      console.log(response)
      if (response.data == 'Logout Successfully'){
        setIsAuth(!isAuth)
        alert('Logout Successfully')
        navigate("/")
      }

    } catch (error) {
      console.log(error)
      // if (error.response.data.message == 'Internal Server Error') {
      //   alert("Internal Server Error")
      // }
    }


  }

  const handleClick = (param = "", value = "") => {
    setClick(!click);
    if (param === "" || value === "") {
      setClick(!click);
    } else if (param === "all") {
      return navigate("/product");
    } else {
      return navigate(`/product?${param}=${value}`);
    }
  };
  const handleSearchClick = () => {
    if (keyword.trim()) {
      return navigate(`/product?keyword=${keyword.trim()}`);
    }
  };

  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };


  const items = [
    {
      label: isAuth ? (
        <div>
          <h4 style={{ color: "green" }}>Welcome User</h4>
          <p>Access orders and many more !</p>
        </div>
      ) : (
        <div>
          <h4>Welcome</h4>
          <p>Create Your account</p>
        </div>
      ),
      key: "-1",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/">Home</Link>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/orders">Orders</Link>,
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/wishlist" >Wishlist</Link>,
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/profile">Account</Link>,
      key: "4",
    },

    {
      label: isAuth ? (
        <p onClick={handleLogout} p="10px" style={{ color: "red" }}>
          Logout
        </p>
      ) : (
        <Link padding="10px" to="/login" style={{ color: "green" }}>Login / Signup</Link>
      ),
      key: "0",
    },

  ];



  return (
    <div className="container">
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img
                src="https://www.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="nav-item item-center">
          <nav className="menu" style={click ? styleB : styleA}>
            <ul className="menu-main">
              <p className="mobItem">
                <Link>SHOP FOR</Link>
                <MdClose className="cross" onClick={() => handleClick()} />
              </p>

              <li
                className="menuItem"
                onClick={() => handleClick("all", "all")}
              >
                <Link to={`/product`}>ALL</Link>
                <div className="subMenu megaMenu menuColumn">
                  <div className="menuList">
                    <ul>
                      <p>Men</p>
                      <li>
                        <Link>T-Shirts</Link>
                      </li>
                      <li>
                        <Link>Jackets</Link>
                      </li>
                      <li>
                        <Link>Sweaters</Link>
                      </li>
                      <li>
                        <Link>Sweatshirts</Link>
                      </li>
                      <li>
                        <Link>Flip Flops</Link>
                      </li>
                      <li>
                        <Link>Boxers</Link>
                      </li>
                      <li>
                        <Link>Jeans</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Women</p>
                      <li>
                        <Link>Kurtas & Suits</Link>
                      </li>
                      <li>
                        <Link>Sarees</Link>
                      </li>
                      <li>
                        <Link>Palazzos</Link>
                      </li>
                      <li>
                        <Link>Jackets</Link>
                      </li>
                      <li>
                        <Link>Jeans</Link>
                      </li>
                      <li>
                        <Link>Jumpsuits</Link>
                      </li>
                      <li>
                        <Link>Shrugs</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Kids</p>
                      <li>
                        <Link>T-Shirts</Link>
                      </li>
                      <li>
                        <Link>Shorts</Link>
                      </li>
                      <li>
                        <Link>Thermals</Link>
                      </li>
                      <li>
                        <Link>Nightwear</Link>
                      </li>
                      <li>
                        <Link>Party Wear</Link>
                      </li>
                      <li>
                        <Link>Trousers</Link>
                      </li>
                      <li>
                        <Link>Jeans</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Beauty</p>
                      <li>
                        <Link>Makeup</Link>
                      </li>
                      <li>
                        <Link>Lipstick</Link>
                      </li>
                      <li>
                        <Link>Mascara</Link>
                      </li>
                      <li>
                        <Link>Foundation</Link>
                      </li>
                      <li>
                        <Link>Nail Polish</Link>
                      </li>
                      <li>
                        <Link>Eyeshadow</Link>
                      </li>
                      <li>
                        <Link>Hair Oil</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapNCdwQMoGwF4Opebj3d9PxJQLqLcUVeYz0RDholbBzNdTKnplyAoscs-T0Dxpucmdqs&usqp=CAU"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick("gender", "men")}
              >
                <Link to={`/product?gender=men`}>MEN</Link>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick("gender", "women")}
              >
                <Link to={`/product?gender=women`}>WOMEN</Link>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick("gender", "kids")}
              >
                <Link to={`/product?gender=kids`}>KIDS</Link>
              </li>
              <li
                className="menuItem"
                onClick={() => handleClick("categories", "beautycare")}
              >
                <Link to={`/product?categories=beautycare`}>BEAUTY</Link>
              </li>
              <br />

              <h3 style={{color:isAuth?"green":""}} className="mobItem">{isAuth?"Welcome User":""} </h3>
             
              <h4 className="mobItem" onClick={handleClick} >
                <Link to="/login" style={{ color: isAuth ? "red" : "green" }}>{ isAuth? "Logout" :"Login / Signup"}</Link>
              </h4>
            </ul>
          </nav>
        </div>
        <div className="nav-item item-right">
          <div
            className="navSearch"
            onKeyUp={({ keyCode }) => {
              if (keyCode === 13) {
                handleSearchClick();
              }
            }}
          >
            <input
              type="text"
              placeholder="Search for products, brands and more"
              onChange={({ target }) => setKeyword(target.value)}
            />
            <BiSearch className="searchIcon" onClick={handleSearchClick} />
          </div>
          <div className="navIcons hide">
            <BiSearch className="sideIcons" />
          </div>
          <div className="navIcons">
            <Dropdown
              menu={{ items, selectable: true, defaultSelectedKeys: ["0"] }}
              placement="bottom"
              trigger={["hover"]}
            >
              <Link onClick={(e) => e.preventDefault()} style={{ color: isAuth ? "green" : "" }}>
                <BiUser className="sideIcons" style={{ color: isAuth ? "green" : "" }} />
                <p className="display">Profile</p>
              </Link>
            </Dropdown>
          </div>
          <div className="navIcons display">
            <Link to="/wishlist">
              <BiHeart className="sideIcons" />
              <p className="display">Wishlist</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/bag">
              <HiOutlineShoppingBag className="sideIcons" />
              <span>1</span>
              <p className="display">Bag</p>
            </Link>
          </div>
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;