import TopBar from "./TopBar";
import React from "react";
import ActivateSearch from "./ActivateSearch";
import "./Search.css";
import MoviesList from "./MoviesList";

function Search(props) {
  const [content, setContent] = React.useState([]);

  const handleContent = (data) => {
    setContent(data);
  };

  console.log(content);

  const isContent = content.length > 0;

  return (
    <div>
      <TopBar></TopBar>
      <ActivateSearch handleContent={handleContent}></ActivateSearch>
      {isContent && <MoviesList movies={content}></MoviesList>}
    </div>
  );
}

export default Search;
