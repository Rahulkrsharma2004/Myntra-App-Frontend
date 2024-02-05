import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
// import { authLogin } from "../../Redux/auth/action";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  // const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(authLogin(formData));
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img src="./assets/signup.jpg" alt="" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
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
                New User ? <Link to="/signup">Signup .</Link>
              </p>
              <button type="submit">
                {contextHolder}
                {auth.userRegister.loading ? "Loading" : "CONTINUE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;