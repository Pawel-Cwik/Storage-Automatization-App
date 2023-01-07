import { useEffect, useState } from "react";
import "./SearchForm.css";
import MoviesList from "./MoviesList";

const SearchForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredProducer, setEnteredProducer] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredLoc, setEnteredLoc] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
    // console.log(enteredTitle.replaceAll(" ", "_"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      nazwa: enteredTitle,
      producent: enteredProducer,
      ilosc: +enteredAmount,
      lokalizacja: eneteredLoc,
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredProducer("");
    setEnteredAmount("");
    setEnteredLoc("");
  };
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    console.log("Test1");
    try {
      const Response = await fetch(
        "http://cors-anywhere.herokuapp.com/https://gestampmagazyn.pythonanywhere.com/download_all_items/"
      );

      if (!Response.ok) {
        console.log("TEST2 WIADOMOSC NIE DOTARLA");

        throw new Error("Something went wrong!");
      }
      console.log("TEST2 WIADOMOSC DOTARLA");
      const data = await Response.json();
      console.log(data);

      const transformedMovies = data.map((movieData) => {
        return {
          id_przedmiotu: movieData[0].id_przedmiotu,
          nazwa: movieData[0].nazwa,
          producent: movieData[0].producent,
          ilosc: movieData[0].ilosc,
          lokalizacja: movieData[1].Nazwa_przestrzeni_skladowania,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
      props.handleContent(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content = <p>Found no movies.</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies}></MoviesList>;
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
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="search-form__control">
            <label>Producer</label>
            <select className="search-form_selected">
              <option value={""}></option>
              <option value="Yaskawa">Yaskawa</option>
              <option value="ABB">ABB</option>
              <option value="BOSCH">BOSCH</option>
              <option value="SEW">ABB</option>
            </select>
            <label>Location</label>
            <select className="search-form_selected">
              <option value={""}></option>
              <option value="A01">A01</option>
              <option value="R01">R01</option>
              <option value="B03">B03</option>
            </select>
          </div>
        </div>

        <div className="search-form__actions">
          <button type="button" onClick={fetchMoviesHandler}>
            Show all
          </button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
