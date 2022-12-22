import ShowAllDisplay from "./ShowAllDisplay";

const ListSearch = (props) => {
  return (
    <ul className={["movies-list"]}>
      {props.movies.map((movie) => (
        <ShowAllDisplay
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default ListSearch;
