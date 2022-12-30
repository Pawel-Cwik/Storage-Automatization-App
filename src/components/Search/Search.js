import TopBar from "./TopBar";
import React from "react";
import ActivateSearch from "./ActivateSearch";
import "./Search.css";
import MoviesList from "./MoviesList";
import ItemPropertiesBar from "../ItemsPropertiesBar";
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
      <div>
        <ActivateSearch handleContent={handleContent}></ActivateSearch>
        {isContent && <ItemPropertiesBar></ItemPropertiesBar>}
        {isContent && <MoviesList movies={content}></MoviesList>}
        {}
      </div>
    </div>
  );
}

export default Search;
