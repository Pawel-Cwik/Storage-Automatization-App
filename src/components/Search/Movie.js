import React from "react";
import Card from "../UI/Card";
import "./Movie.module.css";

const myStyle = {
  borderRadius: "40px",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  margin: "1rem 0",
  backgroundColor: "#4b4b4b",
};
const expenseStyle = {
  display: "flex",
  flexdirection: "column",
  gap: "1rem",
  alignitems: "flexend",
  flexflow: "columnreverse",
  justifycontent: "flexstart",
  flex: "1",
  justifyContent: "space-between",
};
const Movie = (props) => {
  return (
    <li>
      <div style={myStyle}>
        <div style={expenseStyle}>
          <h2> {props.title}</h2>
        </div>
        <div style={expenseStyle}>
          <h2>{props.Producer}</h2>
        </div>
        <div style={expenseStyle}>
          <h2>{props.lokalizacja}</h2>
        </div>
        <div>
          <h3>{props.releaseDate}</h3>
        </div>
      </div>
    </li>
  );
};

export default Movie;
