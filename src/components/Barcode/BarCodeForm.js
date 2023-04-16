import { useState } from "react";
import "../Search/ActivateSearch.css";
import ItemsList from "../Search/ItemsList";
import React from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const BarCodeForm = (props) => {
  const [enteredCode, setEnteredCode] = useState("");
  const [letConfirm, setLetConfirm] = useState(false);
  const [isId, setIsId] = useState("");
  const [letConfirmButtonFromQrReader, setLetConfirmButtonFromQrReader] =
    useState(false);
  const letConfirmButton = () => {
    console.log("letConfirmButton");
  };
  const callConfirmAndFetch = () => {
    fetchItemsHandler();
    setLetConfirmButtonFromQrReader(false);
  };
  useEffect(() => {
    setLetConfirmButtonFromQrReader(props.letConfirmButtonActivate);
  }, [props.letConfirmButtonActivate]);
  console.log(letConfirmButtonFromQrReader);
  useEffect(() => {
    setEnteredCode(props.dataParentToChild2);
  }, [props.dataParentToChild2]);

  const codeChangeHandler = (event) => {
    setEnteredCode(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const itemCodeData = {
      lokalizacja: enteredCode,
    };

    setEnteredCode("");
  };
  const letConfirmCode = () => {
    setLetConfirm(true);
  };
  const unLetConfirmCode = () => {
    setLetConfirm(false);
  };

  const [data, setData] = useState("No result");

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchItemsHandler() {
    props.sendConfirmSearch();
    setIsLoading(true);
    setError(null);
    props.deactivateConfirmButton();

    try {
      const Response = await fetch(
        `https://gestampmagazyn.pythonanywhere.com/search_id/${enteredCode}/`
      );

      if (!Response.ok) {
        console.log("WIADOMOSC NIE DOTARLA");

        throw new Error("Something went wrong!");
      }
      console.log("WIADOMOSC DOTARLA");
      const data = await Response.json();

      if (data === "ID_ERROR") {
        return Swal.fire(
          "Brak wyników",
          `Nie znaleziono przedmiotów spełniających podane kryteria`,
          "error"
        );
      }

      const transformedItems = data.map((itemData) => {
        return {
          id_przedmiotu: itemData.id_przedmiotu,
          nazwa: itemData.nazwa,
          producent: itemData.producent,
          ilosc: itemData.ilosc,
          lokalizacja: data[1].Nazwa_przestrzeni_skladowania,
        };
      });

      setItems(transformedItems[0]);
      props.handleContent([transformedItems[0]]);

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    const enterClickedHandler = (event) => {
      if (event.key === "Enter") {
        console.log("ENTER");

        fetchItemsHandler();
      }
    };
    document.addEventListener("keydown", enterClickedHandler);
    return () => {
      document.removeEventListener("keydown", enterClickedHandler);
    };
  }, [enteredCode]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="'search-form__controls">
          <div className="search-form__control">
            <label>Wyszukaj po kodzie QR</label>

            <div
              style={{
                padding: "2%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "bold" }}>Wprowadzony kod QR:</div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "xx-large",
                  width: "fit-content",
                  borderRadius: "7px",
                  marginTop: "1%",
                }}
              >
                {enteredCode}
              </div>
            </div>
          </div>
        </div>

        <div className="search-form__actions">
          {!letConfirmButtonFromQrReader && (
            <button
              style={{
                marginLeft: "32%",
                backgroundColor: "rgb(222, 222,222)",
                cursor: "not-allowed",
                disabled: "true",
              }}
            >
              Zatwierdź
            </button>
          )}
          {letConfirmButtonFromQrReader && (
            <button
              style={{ marginLeft: "32%" }}
              type="button"
              onClick={callConfirmAndFetch}
            >
              Zatwierdź
            </button>
          )}
          <button type="button" onClick={props.activateQR}>
            Wyszukaj po kodzie QR
          </button>
          <button type="button" onClick={props.onCancel}>
            Anuluj
          </button>
        </div>
      </form>
    </div>
  );
};

export default BarCodeForm;
