import "./TopBar.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import PrivateRoutes from "../../utils/PrivateRoutes";
const TopBar = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  const logOut = () => {
    // 👇️ navigate to /login
    navigate("/login");
    PrivateRoutes(false);
  };
  return (
    <section className="TopBar">
      <button onClick={navigateHome}>Home</button>
      <button onClick={logOut}>Log Out</button>
    </section>
  );
};

export default TopBar;
