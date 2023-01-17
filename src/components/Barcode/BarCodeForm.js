import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";
import "../Search/ActivateSearch.css";
import MovieList from "../Search/MoviesList";
import React from "react";

const BarCodeForm = (props) => {
  const [enteredCode, setEnteredCode] = useState("");

  const codeChangeHandler = (event) => {
    setEnteredCode(event.target.value);
    console.log(enteredCode);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const itemCodeData = {
      lokalizacja: enteredCode,
    };
    props.onSaveItemCodeData(itemCodeData);
    setEnteredCode("");
  };

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchItemsHandler() {
    setIsLoading(true);
    setError(null);
    console.log("Test1");
    try {
      const Response = await fetch(
        `http://cors-anywhere.herokuapp.com/http://gestampmagazyn.pythonanywhere.com/search_id/${enteredCode}/`
      );

      if (!Response.ok) {
        console.log("TEST2 WIADOMOSC NIE DOTARLA");

        throw new Error("Something went wrong!");
      }
      console.log("TEST2 WIADOMOSC DOTARLA");
      const data = await Response.json();
      console.log("DATA");
      console.log(data);

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
      console.log("TRANSFORMED ITEMS");
      console.log(transformedItems);
      console.log("Check");
      console.log(transformedItems[0]);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  let content = <p>Found no items.</p>;
  if (items.length > 0) {
    content = <MovieList movies={items}></MovieList>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="'search-form__controls">
          <div className="search-form__control">
            <label>Search</label>
            <input
              type="text"
              value={enteredCode}
              onChange={codeChangeHandler}
            ></input>
          </div>
        </div>

        <div className="search-form__actions">
          <button type="button" onClick={fetchItemsHandler}>
            Search
          </button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BarCodeForm;
