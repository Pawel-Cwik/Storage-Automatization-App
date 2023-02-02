import React from "react";
import Card from "../UI/Card";
import Movie from "./Movie";
import classes from "./MoviesList.module.css";
import ItemPropertiesBar from "../ItemsPropertiesBar";

const ItemList = {
  padding: "0.1rem",
  margin: "0.01rem auto",
  width: "50rem",
  maxwidth: "95%",
  borderradius: "12px",
  textalign: "center",
  boxshadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
};

const MovieList = (props) => {
  return (
    <div style={ItemList}>
      <ul className={classes["movies-list"]}>
        <ItemPropertiesBar></ItemPropertiesBar>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id_przedmiotu}
            id_przedmiotu={movie.id_przedmiotu}
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
// {
//   statusEditLoc && (
//     <input
//       value={props.statusLoc}
//       onChange={(e) => setStatusLoc(e.target.value)}
//     ></input>
//   );
// }
