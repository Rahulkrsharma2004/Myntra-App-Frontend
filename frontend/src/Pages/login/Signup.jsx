import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../../Redux/auth/action";
import { message } from "antd";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  // const dispatch = useDispatch();
  // const auth = useSelector((store) => store.auth);
  // console.log(auth);
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== ""
    ) {
      if (
        formData.name.trim().length < 4 ||
        formData.password.trim().length < 4
      ) {
        messageApi.open({
          type: "error",
          content: "Name and password must be at least 4 characters",
          duration: 3,
        });
      } else {
        dispatch(registerUser(formData));
      }
    } else {
      messageApi.open({
        type: "error",
        content: "Please enter all required fields",
        duration: 3,
      });
    }
  };
  // if (auth.data.isAuthenticated) {
  //   messageApi.open({
  //     type: "success",
  //     content: "User registered successfully",
  //     duration: 3,
  //   });
  //   // return <Navigate to="/" />;
  // }
  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src="./assets/signup.png" alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter email"
              />
              <input
                name="password"
                value={formData.password}
                onChange={handleFormChange}
                type="password"
                placeholder="Set a password"
              />
              <p>
                Already a User ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">
                CONTINUE
                {contextHolder}
                {/* {auth.userRegister.loading ? "Loading" : "CONTINUE"} */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;