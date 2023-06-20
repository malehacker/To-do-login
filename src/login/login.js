import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  const login = () => {
    if (isChecked) {
      axios.post("https://to-do-login2.onrender.com/login", user)
        .then((res) => {
          alert(res.data.message);
          setLoginUser(res.data.user);
          navigate('/');
        })
        .catch((error) => {
          alert("An error occurred. Please try again.");
        });
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="checkbox">
          I agree to the <a href="https://www.w3schools.com">terms</a> and{" "}
          <a href="https://www.google.com">conditions</a>
        </label>
      </div>
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/register")}>Register</div>
    </div>
  );
};

export default Login;
