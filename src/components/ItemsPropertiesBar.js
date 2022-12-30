const ItemPropertiesBarStyle = {
  backgroundColor: "#597cbe",
  padding: "1rem",
  margin: "2rem auto",
  width: "50rem",
  maxWidth: "95%",
  borderRadius: "12px",

  boxShadow: "0 1px 8px rgba(0, 0, 0, 1)",
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
