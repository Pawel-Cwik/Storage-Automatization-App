import React, { useState } from "react";
import "./Login.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import GestampLogo from "../images/Gestamp-Logo.png";
import background from "../images/background.jpg";
const backGroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
};
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
    <div className="Login" style={backGroundStyle}>
      <div className="auth-form-container">
        <img className="Logo" src={GestampLogo} alt="GestampLogo"></img>
        <h2 style={{ color: "black" }}>Logowanie</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label
            style={{ color: "black", marginBottom: "10px" }}
            htmlFor="email"
          >
            Login
          </label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="Login"
            id="Login"
            name="Login"
          ></input>
          <label
            style={{ color: "black", marginBottom: "10px" }}
            htmlFor="password"
          >
            Hasło
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            id="password"
            name="password"
          ></input>
          {/* <button type="submit">Log In</button> */}
          <button-login-register
            style={{ display: "center", margin: "auto" }}
            onClick={checkLogin}
          >
            Zaloguj Się
          </button-login-register>
        </form>
        <button
          style={{ color: "black" }}
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Nie masz konta? Zarejestruj się tutaj.
        </button>
      </div>
    </div>
  );
};

export default Login;
