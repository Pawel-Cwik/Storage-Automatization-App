import React from "react";
import Card from "../UI/Card";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const ItemList = {
  padding: "1rem",
  margin: "2rem auto",
  width: "50rem",
  maxwidth: "95%",
  borderradius: "12px",
  textalign: "center",
  boxshadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
};

const MovieList = (props) => {
  return (
    <div style={ItemList}>
      <ul style={{ overflow: "scroll" }} className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id_przedmiotu}
            title={movie.nazwa}
            releaseDate={movie.ilosc}
            Producer={movie.producent}
            lokalizacja={movie.lokalizacja}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
