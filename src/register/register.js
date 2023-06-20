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

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const register = () => {
    if (isChecked) {
      const { name, email, password, reEnterPassword } = user;
      if (name && email && password && password === reEnterPassword) {
        axios.post("https://to-do-login2.onrender.com/register", user)
          .then((res) => {
            alert(res.data.message);
            navigate("/login");
          })
          .catch((error) => {
            alert("An error occurred. Please try again.");
          });
      } else {
        alert("Invalid input from your end");
      }
    } else {
      alert("Please agree to the terms and conditions.");
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
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter your password"
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
          I agree to the <a href="https://www.google.com">terms</a> and{" "}
          <a href="https://www.google.com">conditions</a>
        </label>
      </div>
      <button className="button" onClick={register}>Register</button>
      <div>or</div>
      <div className="button" onClick={() => navigate('/login')}>Login</div>
    </div>
  );
};

export default Register;
