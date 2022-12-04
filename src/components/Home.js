import React from "react";
import addtolist from "../images/addtolist.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import barcode from "../images/barcode.png";
import search from "../images/search.png";

const Home = () => {
  const navigate = useNavigate();
  const addToListPage = () => {
    // 👇️ navigate to /
    navigate("/AddToList");
  };
  const barCodePage = () => {
    // 👇️ navigate to /
    navigate("/BarCode");
  };
  const searchPage = () => {
    // 👇️ navigate to /
    navigate("/Search");
  };
  const mystyle = {
    height: 150,
    width: 150,
    margin: 50,

    // CSS CODE
  };
  return (
    <div>
      <h2>HOME</h2>
      <img
        src={addtolist}
        alt="Addtolist"
        style={mystyle}
        onClick={addToListPage}
      />

      <img src={barcode} alt="barcode" style={mystyle} onClick={barCodePage} />

      <img src={search} alt="search" style={mystyle} onClick={searchPage} />
    </div>
  );
};

export default Home;
