import React from "react";

import Items from "./Items";
import classes from "./ItemsList.module.css";
import ItemPropertiesBar from "../ItemsPropertiesBar";
import BarCode from "../Barcode/BarCode";

const ItemList = {
  margin: " auto",
  width: "50rem",
  maxwidth: "96%",
  borderradius: "12px",
  textalign: "center",
  boxshadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  maxHeight: `${window.screen.height}` / 2,
  overflowY: "auto",
  overflowX: "hidden",
};

const ItemsList = (props) => {
  const sprawdzenie = props.dataParentToChild3;

  return (
    <div style={ItemList}>
      <ul className={classes["movies-list"]}>
        <ItemPropertiesBar></ItemPropertiesBar>
        {props.movies.map((movie) => (
          <Items
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

export default ItemsList;
