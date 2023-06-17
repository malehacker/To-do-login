import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e.target);

    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login")
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter your name"
        onChange={handlechange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handlechange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handlechange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your password"
        onChange={handlechange}
      ></input>
      <div className="checkbox-wrapper">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          I agree to the <a href="2www.google.com">terms</a> and{" "}
          <a href="2www.google.com">condition</a>
        </label>
      </div>
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button" onClick={()=>{navigate('/login')}}>Login</div>
    </div>
  );
};

export default Register;
