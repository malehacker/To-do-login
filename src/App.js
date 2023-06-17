import React from "react";
import Homepage from "./homepage/homepage";
import Login from "./login/login";
import Register from "./register/register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import "./App.css"

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
