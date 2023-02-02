import "./TopBar.css";
import { useNavigate } from "react-router-dom";
import React from "react";

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
  // div w którym będzie 4 przyciski pierwsze i to będzie flex row i do lewej i piąty będzie osobno allgin right
  return (
    <section className="TopBar">
      <div>
        <a onClick={navigateHome}>Home</a>
        <a onClick={navigateAdding}>Dodawanie przedmiotów</a>
        <a onClick={navigateSearching}>Wyszukiwanie przedmiotów</a>
        <a onClick={navigateBarCode}>Wyszukiwanie po kodzie</a>
      </div>
      <div style={{ marginRight: "1%" }}>
        <a onClick={logOut}>Wyloguj</a>
      </div>
    </section>
  );
};

export default TopBar;
