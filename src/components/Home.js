import React from "react";
import addtolist from "../images/addtolist.png";
import { Routes, Route, useNavigate } from "react-router-dom";
import barcode from "../images/barcode.png";
import search from "../images/search.png";
import "./Home.css";
import TopBar from "./Search/TopBar";
import background from "../images/background.jpg";
import { useMediaQuery } from "react-responsive";
const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
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
  const backGroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const mystyle = {
    height: 150,
    width: 150,
    margin: 20,
  };
  const tabletStyle = {
    height: 120,
    width: 120,
    margin: 10,
  };
  return (
    <div style={backGroundStyle}>
      <TopBar></TopBar>

      {isDesktopOrLaptop && (
        <div className="Home">
          {" "}
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
                Dodaj do bazy przedmiotów
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
                Wyszukaj przedmiot
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
                Wyszukaj po kodzie QR
              </div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className="Home">
          {" "}
          <div className="container">
            <img
              src={addtolist}
              alt="Avatar"
              class="image"
              style={tabletStyle}
              onClick={addToListPage}
            ></img>
            <div className="middle" onClick={addToListPage}>
              <div className="text" onClick={addToListPage}>
                Dodaj do bazy przedmiotów
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src={search}
              alt="search"
              class="image"
              style={tabletStyle}
              onClick={searchPage}
            ></img>
            <div className="middle" onClick={searchPage}>
              <div className="text" onClick={searchPage}>
                Wyszukaj przedmiot
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src={barcode}
              alt="Avatar"
              class="image"
              style={tabletStyle}
              onClick={barCodePage}
            ></img>
            <div className="middle" onClick={barCodePage}>
              <div className="text" onClick={barCodePage}>
                Wyszukaj po kodzie QR
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
