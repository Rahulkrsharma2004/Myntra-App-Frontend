// import React, { useContext } from "react";
// import Login from "../../Components/Login/Login";
// import { Context } from "../../Contexts/AuthContext";
// import { Link } from "react-router-dom";


// const Wishlist = () => {
//   const { isAuth, setIsAuth } = useContext(Context)
//   if (!isAuth) {
//     return <Login />
//   }
//   return <div>
//     <div className="wishlistMainDiv">
//       <h1>YOUR WISHLIST IS EMPTY</h1>
//       <br />
//       <h3>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</h3>
//       <br />
//       <img src="" alt="" />
//       <br />
//       <Link to='/'><button>CONTINUE SHOPPING</button></Link>
//     </div>
//   </div>;
// };

// export default Wishlist;




import React, { useContext } from "react";
import Login from "../../Components/Login/Login";
import { Context } from "../../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { Box, Tag, TagCloseButton, Image, VStack, Circle, HStack, Text, Divider, StackDivider, Button } from '@chakra-ui/react'


const Wishlist = ({ el, handleAddCart, handleDelete }) => {
  const { isAuth, setIsAuth } = useContext(Context)
  const { MRP, discount, id, brand, img, price, rating, ratingT, size, title } = el
  if (!isAuth) {
    return <Login />
  }
  return <div>
    <div className="emptyWishlistDiv">
      <h1>YOUR WISHLIST IS EMPTY</h1>
      <br />
      <h3>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</h3>
      <br />
      <img src="" alt="" />
      <br />
      <Link to='/'><button>CONTINUE SHOPPING</button></Link>
    </div>

    <div className="dataWishListDiv">
    <VStack border={"1px solid #e8ecf3"} w={"full"} spacing={0} >
        <Box w={"full"}>
          <Image w={"full"} src={img} />
        </Box>
        <Circle onClick={() => handleDelete(el.id)} bgColor={"#eeeded"} p="4px 8px" fontSize={"12px"} cursor={"pointer"} position="relative" left={"38%"} bottom={"62%"}>
          &#x2718;
        </Circle>
        <VStack w={"full"} padding="10px" spacing={0} pb="25px" >
          <Text
            w={"full"}
            m={"2px 0px"}
            fontWeight="400"
            color={"#53575f"}
            fontSize="14px"
            isTruncated
          >{title}
          </Text>
          <HStack>
            <Text fontWeight={500} color={"#2e364b"}>Rs.{price}</Text>
            <Text textDecor={"line-through"} fontWeight={400} fontSize={"12px"} color={"#afb0b7"}>Rs.{MRP}</Text>
            <Text fontWeight={500} fontSize="12px" color={"#ff915c"}>({discount}% OFF)</Text>
          </HStack>
        </VStack>
        <Button onClick={() => handleAddCart(el)} fontWeight={"500"} color="#d53f8c" w={"full"} borderRadius="0" borderTop={"1px solid #e8ecf3"} variant={"unstyled"} _hover={{ bgColor: "none" }}>
          MOVE TO BAG
        </Button>
      </VStack>
    </div>
  </div>;
};

export default Wishlist;











