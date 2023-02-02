import React from "react";
import Card from "../UI/Card";
import "./Movie.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
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
  fontSize: "1rem",
  fontWeight: "bold",
};
const divColumn = {
  display: "flex",
  flexDirection: "column",
};
const amountStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.5rem",
  borderRadius: "0px",
};

const Movie = (props) => {
  const [statusEditLoc, setStatusEditLoc] = useState(false);
  const [statusEditAmount, setStatusEditAmount] = useState(false);
  const [statusLoc, setStatusLoc] = useState(props.lokalizacja);
  const [statusAmount, setStatusAmount] = useState(props.releaseDate);
  const [statusLocChange, setStatusLocChange] = useState(props.lokalizacja);
  const [statusAmountChange, setStatusAmountChange] = useState(
    props.releaseDate
  );
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
    console.log(props.id_przedmiotu);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
    setStatusEditLoc(false);
    setStatusLoc(statusLoc);
    setStatusAmount(statusAmount);
  };
  async function sendSaveData() {
    console.log("TEST1 WIADOMOSC DOTARLA");
    console.log(statusLoc);
    console.log(statusAmount);
    setIsEditing(false);
    setStatusEditLoc(false);
    setStatusAmount(statusAmountChange);
    setStatusLoc(statusLocChange);
    const fillAmount = statusAmountChange.replaceAll(" ", "_");
    const Response = await fetch(
      `https://gestampmagazyn.pythonanywhere.com/test_edit/${props.id_przedmiotu}/${statusLocChange}/${fillAmount}/`
    );
    console.log(`${statusLocChange}, ${statusAmountChange} LALALALALLALAL`);
    if (!Response.ok) {
      Swal.fire(
        "Wystąpił błąd podczas edycji przedmiotu",
        `Przedmiot ${props.title} nie został edytowany - Sprawdź czy wprowadziłeś poprawne dane`,
        "error"
      );

      console.log("TEST2 WIADOMOSC NIE DOTARLA");
      return;
    }

    Swal.fire(
      "Pomyślnie edytowano przedmiot",
      `Przedmiot ${props.title} został edytowany`,
      "success"
    );

    console.log("TEST2 WIADOMOSC DOTARLA");
    console.log(`${statusLoc}, ${statusAmount}`);
  }

  return (
    <li>
      <div style={myStyle}>
        <div style={expenseStyle}>
          <h3> {props.title}</h3>
        </div>
        <div style={expenseStyle}>
          <h3>{props.Producer}</h3>
        </div>
        <div style={expenseStyle}>
          {isEditing ? (
            <select
              defaultValue={statusLoc}
              className="search-form_selected"
              onChange={(e) => setStatusLocChange(e.target.value)}
            >
              <option value="NULL"></option>
              <option value="RE-01-A00">RE-01-A00</option>
              <option value="RE-01-A01">RE-01-A01</option>
              <option value="RE-01-A02">RE-01-A02</option>
              <option value="RE-01-A03">RE-01-A03</option>
              <option value="RE-01-A04">RE-01-A04</option>

              <option value="RE-01-B00">RE-01-B00</option>
              <option value="RE-01-B01">RE-01-B01</option>
              <option value="RE-01-B02">RE-01-B02</option>
              <option value="RE-01-B03">RE-01-B03</option>
              <option value="RE-01-B04">RE-01-B04</option>

              <option value="RE-01-C00">RE-01-C00</option>
              <option value="RE-01-C01">RE-01-C01</option>
              <option value="RE-01-C02">RE-01-C02</option>
              <option value="RE-01-C03">RE-01-C03</option>
              <option value="RE-01-C04">RE-01-C04</option>

              <option value="RE-01-D00">RE-01-D00</option>
              <option value="RE-01-D01">RE-01-D01</option>
              <option value="RE-01-D02">RE-01-D02</option>
              <option value="RE-01-D03">RE-01-D03</option>

              <option value="RE-02-E00">RE-02-E00</option>
              <option value="RE-02-E01">RE-02-E01</option>
              <option value="RE-02-E02">RE-02-E02</option>
              <option value="RE-02-E03">RE-02-E03</option>
              <option value="RE-02-A04">RE-02-E04</option>

              <option value="RE-02-F00">RE-02-F00</option>
              <option value="RE-02-F01">RE-02-F01</option>
              <option value="RE-02-F02">RE-02-F02</option>
              <option value="RE-02-F03">RE-02-F03</option>
              <option value="RE-02-F04">RE-02-F04</option>

              <option value="RE-02-G00">RE-02-G00</option>
              <option value="RE-02-G01">RE-02-G01</option>
              <option value="RE-02-G02">RE-02-G02</option>
              <option value="RE-02-G03">RE-02-G03</option>
              <option value="RE-02-G04">RE-02-G04</option>

              <option value="RE-02-H00">RE-02-H00</option>
              <option value="RE-02-H01">RE-02-H01</option>
              <option value="RE-02-H02">RE-02-H02</option>
              <option value="RE-02-H03">RE-02-H03</option>
              <option value="RE-02-H04">RE-02-H04</option>

              <option value="RE-03-I00">RE-03-I00</option>
              <option value="RE-03-I01">RE-03-I01</option>
              <option value="RE-03-I02">RE-03-I02</option>
              <option value="RE-03-I03">RE-03-I03</option>
              <option value="RE-03-I04">RE-03-I04</option>

              <option value="RE-03-I00">RE-03-I00</option>
              <option value="RE-03-I01">RE-03-I01</option>
              <option value="RE-03-I02">RE-03-I02</option>
              <option value="RE-03-I03">RE-03-I03</option>

              <option value="RE-03-J00">RE-03-J00</option>
              <option value="RE-03-J01">RE-03-J01</option>
              <option value="RE-03-J02">RE-03-J02</option>

              <option value="RE-03-K00">RE-03-K00</option>
              <option value="RE-03-K01">RE-03-K01</option>
              <option value="RE-03-K02">RE-03-K02</option>
            </select>
          ) : (
            <h3>{statusLoc}</h3>
          )}
        </div>
        <div style={amountStyle}>
          {""}
          {isEditing ? (
            <input
              defaultValue={statusAmount}
              onChange={(e) => {
                setStatusAmountChange(e.target.value);
              }}
            />
          ) : (
            <h3> {statusAmount}</h3>
          )}
        </div>
        <div style={divColumn}>
          {!isEditing && (
            <button style={buttonStyle} onClick={startEditingHandler}>
              Edit
            </button>
          )}
          {isEditing && (
            <button style={buttonStyle} onClick={sendSaveData}>
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
