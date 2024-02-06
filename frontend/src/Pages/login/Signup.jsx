import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";

const Signup = () => {

  const [userDetails, setUserDetails] = useState({ username: "", email: "", pass: "" })
  const nevigate = useNavigate()
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const handleUserDetails = (e) => {
    const { name, value } = e.target

    setUserDetails((userDetails) => ({
      ...userDetails,
      [name]: value
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ""
    }));
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (userDetails.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (userDetails.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (userDetails.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleRegisterUser = async () => {
   
      try {
        let response = await axios.post("https://myntra-app-backend-production.up.railway.app/user/register", userDetails, { withCredentials: true })
        console.log(response)

        // if (response.data.msg == 'New user has been created') {
        //   alert("Registered Successfully")
        //   nevigate("/")
        // }

 
      } catch (error) {
        console.log(error.message)
        // if (error.data.error == 'Invalid password format') {
        //   alert("Invalid password format")
        // }
        // if (error.response.data.error == 'User with this email already exists') {
        //   alert("User with this email already exists")
        // }
      }
  

  }



  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src="https://myntraa-clone.netlify.app/assets/signup.png" alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <input
              name="name"
              value={userDetails.name}
              onChange={handleUserDetails}
              type="text"
              required={true}
              placeholder="Full name"
            />
            <input
              name="email"
              value={userDetails.email}
              onChange={handleUserDetails}
              type="email"
              placeholder="Enter email"
            />
            <input
              name="password"
              value={userDetails.password}
              onChange={handleUserDetails}
              type="password"
              placeholder="Set a password"
            />
            <p>
              Already a User ? <Link to="/login">Login .</Link>
            </p>
            <button type="submit" onClick={handleRegisterUser} >
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;