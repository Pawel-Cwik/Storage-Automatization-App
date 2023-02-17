import React from "react";
import Card from "../UI/Card";
import "./Movie.module.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { Button } from "@material-ui/core";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
const myStyle = {
  borderRadius: "15px",
  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.9)",
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
  margin: "0.5rem auto",
  backgroundColor: "rgb(222,222,222)",
};
const expenseStyleName = {
  flexdirection: "column",

  alignitems: "flexend",
  flexflow: "columnreverse",
  justifycontent: "flexstart",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  // padding: "0.5rem",
  textAlign: "start",
  minWidth: "35%",
  maxWidth: "35%",
};
const expenseStyleProducer = {
  flexdirection: "column",

  alignitems: "flexend",
  flexflow: "columnreverse",
  justifycontent: "flexstart",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  // padding: "0.5rem",
  textAlign: "start",
  minWidth: "20%",
  maxWidth: "30%",
};

const expenseStyle = {
  flexdirection: "column",

  alignitems: "flexend",
  flexflow: "columnreverse",
  justifycontent: "flexstart",
  flex: "1",
  justifyContent: "center",
  alignItems: "center",
  // padding: "0.5rem",
  textAlign: "start",
};
const buttonStyle = {
  padding: "0.2rem",

  backgroundColor: "#1976d2",
  color: "white",
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
  minWidth: "20%",
};

const Movie = (props) => {
  const [statusEditLoc, setStatusEditLoc] = useState(false);
  const [statusEditAmount, setStatusEditAmount] = useState(false);
  const [statusLoc, setStatusLoc] = useState(props.lokalizacja);
  const [statusAmount, setStatusAmount] = useState(props.releaseDate);
  const [statusLocChange, setStatusLocChange] = useState(props.lokalizacja);
  const hex = require("string-hex");
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
    const correctPolishLetters = (string) =>
      string
        .replace(/105/g, "c485")
        .replace(/107/g, "c487")
        .replace(/119/g, "c499")
        .replace(/142/g, "c582")
        .replace(/144/g, "c584")
        .replace(/f3/g, "c3b3")
        .replace(/15b/g, "c59b")
        .replace(/17a/g, "c5ba")
        .replace(/17c/g, "c5bc");

    // ą 105. ć 107. ę 119. ł 142. ń 144. ó f3. ś 15b. ź 17a. ż 17c.
    const conversionAmount = hex(statusAmountChange);
    const correctPolishLettersAmountToHex =
      correctPolishLetters(conversionAmount);
    const Response = await fetch(
      `https://gestampmagazyn.pythonanywhere.com/test_edit/${props.id_przedmiotu}/${statusLocChange}/${correctPolishLettersAmountToHex}/`
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
        <div style={expenseStyleName}>
          <h3> {props.title}</h3>
        </div>
        <div style={expenseStyleProducer}>
          <h3>{props.Producer}</h3>
        </div>
        <div style={expenseStyle}>
          {isEditing ? (
            <select
              style={{
                boxShadow: "0 1px 8px rgba(0, 0, 0, 0.9)",
                borderRadius: "6px",
                marginTop: "8%",
                height: "2.2rem",
                maxWidth: "100%",
                width: "6rem",
              }}
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
              style={{
                maxWidth: "50%",
                padding: "inherit",
                marginTop: "10%",
                textAlign: "right",
              }}
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
              Edytuj
            </button>
          )}

          {isEditing && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={sendSaveData}
            >
              Zapisz
            </Button>
          )}
          <Box marginTop={1}>
            {isEditing && (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={stopEditingHandler}
              >
                Anuluj
              </Button>
            )}
          </Box>
        </div>
      </div>
    </li>
  );
};

export default Movie;
