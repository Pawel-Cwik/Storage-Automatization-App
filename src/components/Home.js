import React from "react";
import addtolist from "../images/addtolist.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import barcode from "../images/barcode.png";
import search from "../images/search.png";
import "./Home.css";

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
    margin: 20,

    // CSS CODE
  };
  return (
    <div className="Home">
      <div className="container">
        <img
          src={addtolist}
          alt="Avatar"
          class="image"
          style={mystyle}
          onClick={addToListPage}
        ></img>
        <div className="middle" onClick={addToListPage}>
          <div className="text" onClick={addToListPage}>
            Add to list
          </div>
        </div>
      </div>
      <div className="container">
        <img
          src={search}
          alt="search"
          class="image"
          style={mystyle}
          onClick={searchPage}
        ></img>
        <div className="middle" onClick={searchPage}>
          <div className="text" onClick={searchPage}>
            Search
          </div>
        </div>
      </div>
      <div className="container">
        <img
          src={barcode}
          alt="Avatar"
          class="image"
          style={mystyle}
          onClick={barCodePage}
        ></img>
        <div className="middle" onClick={barCodePage}>
          <div className="text" onClick={barCodePage}>
            Barcode
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
