import React, { useState } from "react";
import "./Login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import GestampLogo from "../images/Gestamp-Logo.png";
import GestampLogo2 from "../images/Gestamp-Logo2.png";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="auth-form-container">
        <img className="Logo" src={GestampLogo} alt="GestampLogo"></img>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          ></input>
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          ></input>
          {/* <button type="submit">Log In</button> */}
          <button-login-register onClick={navigateHome}>
            Log in
          </button-login-register>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default Login;
