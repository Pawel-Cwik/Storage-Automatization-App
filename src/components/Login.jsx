import React, { useEffect, useState } from "react";
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
    navigate("/Home");
  };
  async function checkLogin() {
    try {
      const Response = await fetch(
        `https://gestampmagazyn.pythonanywhere.com/login/${login}/${pass}/`
      );

      if (!Response.ok) {
        console.log("TEST2 WIADOMOSC NIE DOTARLA");

        throw new Error("Something went wrong!");
      }
      console.log("TEST2 WIADOMOSC DOTARLAA");
      const data = await Response.json();
      console.log(data);
      if (data === "LOGGED") {
        navigateHome();
      }
    } catch (error) {
      console.log("TEST3 WIADOMOSC NIE DOTARLA");
      console.log(error);
    }
  }
  useEffect(() => {
    const enterLoginHandler = (event) => {
      if (event.key === "Enter") {
        console.log("ENTER");

        checkLogin();
      }
    };
    document.addEventListener("keydown", enterLoginHandler);
    return () => {
      document.removeEventListener("keydown", enterLoginHandler);
    };
  }, [login, pass]);
  return (
    <div className="Login" style={backGroundStyle}>
      <div className="auth-form-container">
        <img className="Logo" src={GestampLogo} alt="GestampLogo"></img>
        <h2 style={{ color: "black" }}>Logowanie</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label
            style={{ color: "black", marginBottom: "10px", marginTop: "5px" }}
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
            style={{ color: "black", marginBottom: "10px", marginTop: "5px" }}
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
            style={{
              display: "center",
              marginBottom: "auto",
              marginTop: "10px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
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
