import React, { useState } from "react";
import "./Register.css";
import GestampLogo from "../images/Gestamp-Logo.png";
import "./Login.css";
import background from "../images/background.jpg";
import { useEffect } from "react";
const backGroundStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
};
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState("");

  const handleSubmits = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const enterRegisterHandler = (event) => {
      if (event.key === "Enter") {
        console.log("ENTER");
      }
    };
    document.addEventListener("keydown", enterRegisterHandler);
    return () => {
      document.removeEventListener("keydown", enterRegisterHandler);
    };
  }, [login, pass]);
  return (
    <div className="Register" style={backGroundStyle}>
      <div className="auth-form-container">
        <img className="Logo" src={GestampLogo} alt="GestampLogo"></img>
        <h2 style={{ color: "black" }}>Rejestracja</h2>
        <form className="register-form" onSubmit={handleSubmits}>
          <label
            style={{ color: "black", marginBottom: "10px" }}
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
          ></input>
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
          <button-login-register style={{ display: "center", margin: "auto" }}>
            Register
          </button-login-register>
        </form>
        <button onClick={() => props.onFormSwitch("login")}>
          Masz już konto? Zaloguj się tutaj.
        </button>
      </div>
    </div>
  );
};

export default Register;
