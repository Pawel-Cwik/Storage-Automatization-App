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
  const buttonStyle = {
    padding: "0.5rem",
    margin: "auto",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
    boxShadow: "0 1px 8px rgba(0, 0, 0, 0.9)",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    height: "40px",
  };
  //console.log(content);

  const isContent = content.length > 0;
  return (
    <div>
      <TopBar></TopBar>
      <div>
        <ActivateSearch handleContent={handleContent}></ActivateSearch>
        {isContent && <ItemPropertiesBar></ItemPropertiesBar>}

        {isContent && <MoviesList movies={content}></MoviesList>}
      </div>
    </div>
  );
}

export default Search;
