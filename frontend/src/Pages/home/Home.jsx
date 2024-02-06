import React,{useContext,useState,useEffect} from "react";
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Context } from "../../Contexts/AuthContext";
import { Link,useNavigate } from "react-router-dom";
import MetaData from "../../Components/MetaData";
import sliderimg1 from "../../assets/slide1.webp"
import sliderimg2 from "../../assets/slide2.webp"
import sliderimg3 from "../../assets/slide3.webp"
import sliderimg4 from "../../assets/slide4.webp"
import sliderimg5 from "../../assets/slide5.webp"
import sliderimg6 from "../../assets/slide6.webp"
import cardimg1 from "../../assets/img1.jpg"
import cardimg2 from "../../assets/img2.webp"
import cardimg3 from "../../assets/img3.webp"
import cardimg4 from "../../assets/img4.webp"
import cardimg5 from "../../assets/img5.webp"
import cardimg6 from "../../assets/img6.jpg"
import cardimg7 from "../../assets/img7.webp"
import cardimg8 from "../../assets/img8.jpg"
import cardimg9 from "../../assets/img9.webp"
import cardimg10 from "../../assets/img10.webp"
import cardimg11 from "../../assets/img11.webp"
import cardimg12 from "../../assets/img12.webp"
import cardimg13 from "../../assets/img13.jpg"




const Home = () => {

  const [products, setProducts] = useState([])
  const {isAuth,setIsAuth} = useContext(Context)
  const navigate = useNavigate()

  const getProducts = async () => {
    try {
      let productData = await axios.get("myntra-app-backend-production.up.railway.app/product/", products, { withCredentials: true })
      setProducts(productData.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handleEdit = async (productId) => {
    // Check if the user is authenticated
   
    if (isAuth) {
      // try {
      //   await axios.patch(`https://full-stack-backend-beyu.onrender.com/product/update/${productId}`, { withCredentials: true });
      //   console.log(`Editing product with ID: ${productId}`);
      //   alert(`Editing product with ID: ${productId}`);
      // } catch (error) {
      //    console.log(error)
      // }
    } else {
      navigate('/login');
    }
  };

  const handleDelete = async (productId) => {
    // Check if the user is authenticated
    if (isAuth) {
      // try {
      //   // Make a DELETE request to your API to delete the product
      //   await axios.delete(`https://full-stack-backend-beyu.onrender.com/product/delete/${productId}`, { withCredentials: true });

      //   // Update the state to reflect the deletion
      //   setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
        navigate('/login');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(`myntra-app-backend-production.up.railway.app/logout`,{}, { withCredentials: true })
      console.log(response)
      if(response.data == 'Logout Successfully'){
        setIsAuth(!isAuth)
        alert('Logout Successfully')
      }

    } catch (error) {
      // if (error.response.data.msg == 'Now you need to login again') {
      //   alert("Now you need to login again")
      // }
      console.log(error)
    }
  }

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
      <p className="homeHeader">CATEGORIES TO CARRY</p>
      <div className="homeCategories">
        <div>
          <Link>
            <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0f0be09e-4155-47bf-82e1-51044e7e7fd11645602467052-Kurtas.jpg" alt="" />
          </Link>
          
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7f814546-b705-4d9b-9ab5-1ddfeca786391645602467001-Flip-Flops.jpg" alt="" /></Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/07e5c29a-2eab-4b2d-b617-6565ffe1f4701645602467025-Innerwear.jpg" alt="" /></Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/09b3164c-241a-4134-baa1-49b12c56c3901645602466968-Bath-Essentials.jpg" alt="" /></Link>
        </div>
        <div>
         <Link> <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/054a056f-33e8-4b6c-b747-9b88d7fce0a11645602467174-Watches.jpg" alt="" /></Link>
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/12c3b4aa-8160-442f-b93e-e896eafb1b0a1645602467160-T-Shirts-_-Shorts_Kids.jpg" alt="" /></Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/171a820e-96f0-4b11-a138-03953a7e05481645602467153-Trousers_W.jpg" alt="" /></Link>
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/355b9499-3345-4457-8b3b-2eeceaecf4561645602467020-Infant-Essentials.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/736f3951-e67b-414f-bfb1-56e2794d441d1645602467114-Sports-Shoes.jpg" alt="" /></Link>
        </div>
        <div>
         <Link> <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/5860c3c2-a639-4625-ac1d-4d55406f128a1645602467134-Track-Pants.jpg" alt="" /></Link>
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/67783047-7fcc-4530-9368-9be75a713e411645602466995-Dresses.jpg" alt="" /></Link>
        </div>
        <div>
          <Link>
          <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg" alt="" /></Link>
        </div>
        <div>
         <Link>
         <img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b34a30a6-504b-4c94-b7e1-61391d536bc51645602467038-Jewellery.jpg" alt="" /></Link>
        </div>
        <div>
          <Link><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f9ca5609-b634-42d4-8c08-a8eaebb818b71645602467085-Sarees.jpg" alt="" /></Link>
        </div>
      </div>
      <p className="homeHeader">BRANDS ON THE WAY UP</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src={cardimg3} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg4} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg3} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg4} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg5} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg6} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg7} alt="" />
          </Link>
        </div>
        
        <div>
          <Link>
            <img src={cardimg9} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg10} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg11} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg12} alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src={cardimg13} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;