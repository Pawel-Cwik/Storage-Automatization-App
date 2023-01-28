import React, { useState } from "react";
import "./Login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import GestampLogo from "../images/Gestamp-Logo.png";

const Login = (props) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  const checkLogin = () => {
    if (login === "admin" && pass === "admin") {
      console.log("Login correct");
      navigateHome();
    } else {
      alert("Login or password incorrect");
    }
  };

  return (
    <div className="Login">
      <div className="auth-form-container">
        <img className="Logo" src={GestampLogo} alt="GestampLogo"></img>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Login</label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login"
            id="Login"
            name="Login"
          ></input>
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          ></input>
          {/* <button type="submit">Log In</button> */}
          <button-login-register onClick={checkLogin}>
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
