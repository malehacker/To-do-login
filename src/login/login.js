import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser}) => {
  const navigate = useNavigate();
  

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user)
      navigate('/')  
    });
  };

const handlechange = (e) => {
  const { name, value } = e.target;
  console.log(name, value);
  console.log(e.target);
  setUser({
    ...user,
    [name]: value,
  });
};
return (
  
  <div className="login">
    <h1>Login</h1>
    <input
      type="text"
      name="email"
      value={user.email}
      placeholder=" Enter your email"
      onChange={handlechange}
    ></input>
    <input
      type="password"
      name="password"
      value={user.password}
      placeholder="Enter your password"
      onChange={handlechange}
    ></input>
    <div className="checkbox-wrapper">
      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">
        I agree to the <a href="https://www.w3schools.com"> terms</a> and{" "}
        <a href="2www.google.com">condition</a>
      </label>
    </div>
    <div className=" button" onClick={login}>
      login
    </div>
    <div>or</div>
    <div className="button " onClick={()=>navigate("/register")}>Register</div>
  </div>
)
};

export default Login;
