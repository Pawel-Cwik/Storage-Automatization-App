import React from "react";
const ItemPropertiesBarStyle = {
  backgroundColor: "rgb(222,222,222)",
  padding: "auto",

  borderRadius: "15px",

  boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
  display: "flex",
};

const ItemPropertiesBar = () => {
  return (
    <section style={ItemPropertiesBarStyle}>
      <h1 style={{ minWidth: "34%", textAlign: "center" }}>Nazwa:</h1>
      <h1 style={{ minWidth: "18%", textAlign: "start" }}>Producent:</h1>
      <h1 style={{ minWidth: "24%", textAlign: "start" }}>Lokalizacja:</h1>
      <h1 style={{ textAlign: "start" }}>Ilość:</h1>
    </section>
  );
};

export default ItemPropertiesBar;
