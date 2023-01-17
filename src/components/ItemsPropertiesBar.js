import React from "react";
const ItemPropertiesBarStyle = {
  backgroundColor: "#4b4b4b",
  padding: "auto",
  margin: "0.5rem auto",
  width: "50rem",
  maxWidth: "95%",
  borderRadius: "30px",

  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  display: "flex",
  justifyContent: "space-around",
};

const ItemPropertiesBar = () => {
  return (
    <section style={ItemPropertiesBarStyle}>
      <h1>Nazwa:</h1>
      <h1>Producent:</h1>
      <h1>Lokalizacja:</h1>
      <h1>Ilość:</h1>
    </section>
  );
};

export default ItemPropertiesBar;
