import React, { useState, useContext } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { Link,useNavigate } from "react-router-dom";
import { Context } from "../../Contexts/AuthContext";
import "./Login.css";

const Login = () => {
    const [userDetails, setUserDetails] = useState({ email: "", pass: "" });
    const { setIsAuth, setUser } = useContext(Context);
    const nevigate = useNavigate()

    const handleUserDetails = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLoginUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://myntra-app-backend-production.up.railway.app/users/login", userDetails , { withCredentials: true });
            console.log(response.data.ACCESS_TOKEN);
            console.log(response);
            Cookies.set("ACCESS_TOKEN", response.data.ACCESS_TOKEN);
            if (response.data.msg === 'Login Successful') {
                alert("Login Successfully");
                nevigate("/");
                setIsAuth(true);
                setUser(response.data.user);
            } else if (response.data.msg === 'Register first or Wrong crendential') {
                alert("Register first or Wrong crendential");
            }
        } catch (error) {
            console.log(error);
            if (error.response.data === 'User not found') {
                alert("User not found.Please sign up first.");
            }
        }
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <div className="loginImage">
                    <img src="https://myntraa-clone.netlify.app/assets/signup.jpg" alt="" />
                </div>
                <div className="loginDetail">
                    <div>
                        <h3>Login</h3>
                    </div>
                    <div className="formInput">
                        <form onSubmit={handleLoginUser}>
                            <input
                            className="loginInput"
                                name="email"
                                value={userDetails.email}
                                onChange={handleUserDetails}
                                type="email"
                                required
                                placeholder="Enter email"
                            />
                            <input
                            className="loginInput"
                                name="pass"
                                value={userDetails.pass}
                                onChange={handleUserDetails}
                                type="password"
                                required
                                placeholder="Set a password"
                            />
                            <p>
                                New User? <Link to="/signup">Signup</Link>.
                            </p>
                            <button type="submit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
