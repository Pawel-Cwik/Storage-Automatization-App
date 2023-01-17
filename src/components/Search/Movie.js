import React from "react";
import Card from "../UI/Card";
import "./Movie.module.css";
import { useState } from "react";

const myStyle = {
  borderRadius: "40px",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.9)",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  margin: "0.5rem auto",
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
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
};
const buttonStyle = {
  padding: "0.2rem",
  margin: "0.4rem 0.001rem 0.01rem 0.4rem",
  backgroundColor: "white",
  color: "black",
  display: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "5px",
};
const divColumn = {
  display: "flex",
  flexDirection: "column",
};

const Movie = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
    console.log(this);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
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
        <div style={divColumn}>
          {!isEditing && (
            <button style={buttonStyle} onClick={startEditingHandler}>
              Edit
            </button>
          )}
          {isEditing && (
            <button style={buttonStyle} onClick={stopEditingHandler}>
              Save
            </button>
          )}
          {isEditing && (
            <button style={buttonStyle} onClick={stopEditingHandler}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Movie;
