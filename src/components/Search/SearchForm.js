import { useEffect, useState } from "react";
import "./SearchForm.css";

import React from "react";
import Swal from "sweetalert2";

const SearchForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredProducer, setEnteredProducer] = useState("NULL");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [eneteredLoc, setEnteredLoc] = useState("NULL");
  const hex = require("string-hex");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      nazwa: enteredTitle,
      producent: enteredProducer,
      ilosc: +enteredAmount,
      lokalizacja: eneteredLoc,
    };

    setEnteredTitle("");
    setEnteredProducer("");
    setEnteredAmount("");
    setEnteredLoc("");
  };
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchByNameProducerLocationHandler() {
    Swal.showLoading();
    setError(null);

    if (enteredTitle.length === 0) {
      try {
        const fillSpaces = enteredProducer.replaceAll(" ", "_");
        const Response = await fetch(
          `https://gestampmagazyn.pythonanywhere.com/search_for/NULL/${eneteredLoc}/${fillSpaces}/`
        );

        if (!Response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await Response.json();

        if (data === "BRAK") {
          return Swal.fire(
            "Brak wyników",
            `Nie znaleziono przedmiotów spełniających podane kryteria`,
            "error"
          );
        }

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
        Swal.hideLoading(Swal.close());
        props.handleContent(transformedMovies);
      } catch (error) {
        setError(error.message);
      }
      Swal.hideLoading(Swal.close());
    }

    if (enteredTitle.length > 0) {
      try {
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
        const conversion = hex(enteredTitle);
        const correctPolishLettersToHex = correctPolishLetters(conversion);
        const fillSpacesProducer = enteredProducer.replaceAll(" ", "_");
        const fillSpacesTitle = enteredTitle.replaceAll(" ", "_");

        const Response = await fetch(
          `https://gestampmagazyn.pythonanywhere.com/search_for/${correctPolishLettersToHex}/${eneteredLoc}/${fillSpacesProducer}/`
        );

        if (!Response.ok) {
          console.log("TEST2 WIADOMOSC NIE DOTARLA");

          throw new Error("Something went wrong!");
        }
        console.log("TEST2 WIADOMOSC DOTARLA");
        const data = await Response.json();
        console.log(data);
        if (data === "BRAK") {
          return Swal.fire(
            "Brak wyników",
            `Nie znaleziono przedmiotów spełniających podane kryteria`,
            "error"
          );
        }

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
        Swal.hideLoading(Swal.close());
        props.handleContent(transformedMovies);
      } catch (error) {
        setError(error.message);
      }
      Swal.hideLoading(Swal.close());
    }
  }
  async function fetchMoviesHandler() {
    Swal.showLoading();
    setError(null);

    try {
      const Response = await fetch(
        "https://gestampmagazyn.pythonanywhere.com/download_all_items/"
      );

      if (!Response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await Response.json();

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
      Swal.hideLoading(Swal.close());
      props.handleContent(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    Swal.hideLoading(Swal.close());
  }
  useEffect(() => {
    const enterClickedHandler = (event) => {
      if (event.key === "Enter") {
        fetchByNameProducerLocationHandler();
      }
    };
    document.addEventListener("keydown", enterClickedHandler);
    return () => {
      document.removeEventListener("keydown", enterClickedHandler);
    };
  }, [eneteredLoc, enteredProducer, enteredTitle]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="'search-form__controls">
          <div className="search-form__control">
            <label>Nazwa</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="search-form__control">
            <label>Producent</label>
            <select
              className="search-form_selected"
              onChange={(e) => setEnteredProducer(e.target.value)}
            >
              <option value="NULL"></option>
              <option value="ABB">ABB</option>
              <option value="ACCEN">ACCEN</option>
              <option value="ATLAS COPCO">ATLAS COPCO</option>
              <option value="AQUA FILTER">AQUA FILTER</option>
              <option value="BAKS">BAKS</option>
              <option value="BOSCH">BOSCH</option>
              <option value="BECKER">BECKER</option>
              <option value="BEMKO">BEMKO</option>
              <option value="BRAMER">BRAMER</option>
              <option value="DESINA">DESINA</option>
              <option value="DYDEN">DYDEN</option>
              <option value="EATON">EATON</option>
              <option value="EINDLABEL">EINDLABEL</option>
              <option value="EBMPAPAST">EBMPAPAST</option>
              <option value="FESTO">FESTO</option>
              <option value="FLANCO VENT">FLANCO VENT</option>
              <option value="FRONIUS">FRONIUS</option>
              <option value="GMN">GMN</option>
              <option value="HARTING">HARTING</option>
              <option value="IGUS">IGUS</option>
              <option value="KWVE">KWVE</option>
              <option value="LEONI">LEONI</option>
              <option value="MC">MC</option>
              <option value="MOOG">MOOG</option>
              <option value="NCH">NCH</option>
              <option value="NORD">NORD</option>
              <option value="NABTESCO">NABTESCO</option>
              <option value="NOMA WOOL">NOMA WOOL</option>
              <option value="OBO">OBO</option>
              <option value="OSRAM">OSRAM</option>
              <option value="PARKER">PARKER</option>
              <option value="PERMATEC">PERMATEC</option>
              <option value="PHILLIPS">PHILLIPS</option>
              <option value="PNEUMAT">PNEUMAT</option>
              <option value="POLWAX">POLWAX</option>
              <option value="REIKU">REIKU</option>
              <option value="RITAL">RITAL</option>
              <option value="SCA">SCA</option>
              <option value="SEW">SEW</option>
              <option value="SICK">SICK</option>
              <option value="SIEMENS">SIEMENS</option>
              <option value="SIMON">SIMON</option>
              <option value="SKF">SKF</option>
              <option value="SMA">SMA</option>
              <option value="SMC">SMC</option>
              <option value="SALZER">SALZER</option>
              <option value="SCHNEIDER ELECTRICS">SCHNEIDER ELECTRICS</option>
              <option value="SINGIN ROCK">SINGIN ROCK</option>
              <option value="SPAMEL">SPAMEL</option>
              <option value="SPIROTECH">SPIROTECH</option>
              <option value="STALIMET">STALIMET</option>
              <option value="VARVEL">VARVEL</option>
              <option value="WITTENSTEIN">WITTENSTEIN</option>
              <option value="WIKA, AFRISO">WIKA, AFRISO</option>
              <option value="YATO">YATO</option>
              <option value="YASKAWA">YASKAWA</option>
              <option value="ZIEHL-ABEGG">ZIEHL-ABEGG</option>
            </select>
            <label>Lokalizacja</label>
            <select
              className="search-form_selected"
              onChange={(e) => setEnteredLoc(e.target.value)}
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
          </div>
        </div>

        <div className="search-form__actions">
          <button
            style={{ marginRight: "21rem" }}
            type="button"
            onClick={fetchMoviesHandler}
          >
            Pokaż wszystkie
          </button>
          <button type="button" onClick={props.onCancel}>
            Anuluj
          </button>
          <button type="button" onClick={fetchByNameProducerLocationHandler}>
            Wyszukaj
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
