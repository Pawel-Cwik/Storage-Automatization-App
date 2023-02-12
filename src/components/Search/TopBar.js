import "./TopBar.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { colors } from "@material-ui/core";

const TopBar = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/Home");
  };
  const logOut = () => {
    // 👇️ navigate to /login
    navigate("/");
  };
  const navigateAdding = () => {
    // 👇️ navigate to /AddToList
    navigate("/AddToList");
  };
  const navigateSearching = () => {
    // 👇️ navigate to /Search
    navigate("/Search");
  };

  const navigateBarCode = () => {
    // 👇️ navigate to /BarCode
    navigate("/BarCode");
  };
  const buttonStyleNavi = {
    // outline: "black solid 1px",
    // borderRadius: "10px",
    borderRight: "2px solid black",
    borderRadius: "40px",
  };
  const buttonStyle = {
    // outline: "black solid 1px",
    // borderRadius: "10px",
    borderLeft: "2px solid black",
    borderRadius: "40px",
  };
  // div w którym będzie 4 przyciski pierwsze i to będzie flex row i do lewej i piąty będzie osobno allgin right
  return (
    <section className="TopBar">
      <div>
        <a style={buttonStyleNavi} onClick={navigateHome}>
          Home
        </a>
        <a style={buttonStyleNavi} onClick={navigateAdding}>
          Dodawanie przedmiotów
        </a>
        <a style={buttonStyleNavi} onClick={navigateSearching}>
          Wyszukiwanie przedmiotów
        </a>
        <a style={buttonStyleNavi} onClick={navigateBarCode}>
          Wyszukiwanie po kodzie QR
        </a>
      </div>
      <div>
        <a style={buttonStyle} onClick={logOut}>
          Wyloguj
        </a>
      </div>
    </section>
  );
};

export default TopBar;
