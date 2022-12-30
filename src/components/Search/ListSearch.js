import ShowAllDisplay from "./ShowAllDisplay";

const ListSearch = (props) => {
  return (
    <ul className={["movies-list"]}>
      {props.movies.map((movie) => (
        <ShowAllDisplay
          title={movie.nazwa}
          releaseDate={movie.ilosc}
          openingText={movie.producent}
          lokalizacja={movie.lokalizacja}
        />
      ))}
    </ul>
  );
};

export default ListSearch;
