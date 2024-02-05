import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";
import MetaData from "../../Components/MetaData";
import sliderimg1 from "../../assets/one.jpeg"
import sliderimg2 from "../../assets/two.jpeg"
import sliderimg3 from "../../assets/three.jpeg"
import sliderimg4 from "../../assets/four.jpeg"
import sliderimg5 from "../../assets/five.jpeg"
import sliderimg6 from "../../assets/six.jpeg"

const Home = () => {
  return (
    <div>
      <MetaData title={"Home Page"} />
      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <div className="imageslider">
            <img src={sliderimg1} alt="images" className="slideimg"/>
          </div>
          <div className="imageslider">
            <img src={sliderimg2} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg3} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg4} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg5} alt="images" />
          </div>
          <div className="imageslider">
            <img src={sliderimg6} alt="images" />
          </div>
          
        </Carousel>
      </div>
      <div className="homeNav">
        <div>
          <Link>
            <img src={sliderimg6} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/women.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/kids.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/beauty.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/footwear.webp" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">CATEGORIES TO CARRY</p>
      <div className="homeCategories">
        <div>
          <Link>
            <img src="./assets/category/Shirts.webp" alt="" />
          </Link>
        </div>
        <div>
          <img src="./assets/category/Trousers.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/T-Shirts.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Tops.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Teens-Wear.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Sets.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Sarees.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Kurtas.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Jeans.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Innerwear.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Hangbags.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Dresses.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Casual-Shoes.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Flops.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Essentials.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Kids.webp" alt="" />
        </div>
      </div>
      <p className="homeHeader">COLORS OF THE SEASON</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src="./assets/colors/Lime.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/White.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Hues.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Cobalt.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Browns.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Pastels.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Blue.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/Olive.webp" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;