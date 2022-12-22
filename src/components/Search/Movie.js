import React from "react";
import Card from "../UI/Card";
import "./Movie.module.css";

const myStyle = {
  borderRadius: "12px",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  margin: "1rem 0",
  backgroundColor: "#4b4b4b",
  flexDirection: "column",
};

const Movie = (props) => {
  return (
    <li>
      <div style={myStyle}>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__description">
          <h3>{props.releaseDate}</h3>
        </div>

        <p>{props.openingText}</p>
      </div>
    </li>
  );
};

export default Movie;
