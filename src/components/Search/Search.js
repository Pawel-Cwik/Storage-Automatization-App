import TopBar from "./TopBar";
import React from "react";
import ActivateSearch from "./ActivateSearch";
import "./Search.css";
import MoviesList from "./ItemsList";

function Search(props) {
  const [content, setContent] = React.useState([]);

  const handleContent = (data) => {
    setContent(data);
  };

  const isContent = content.length > 0;
  return (
    <div>
      <TopBar></TopBar>
      <div>
        <ActivateSearch handleContent={handleContent}></ActivateSearch>

        {isContent && <MoviesList movies={content}></MoviesList>}
      </div>
    </div>
  );
}

export default Search;
