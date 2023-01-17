import React from "react";
import TopBar from "../Search/TopBar";
import AcivateAddToList from "./ActivateAddToList";
import MoviesList from "../Search/MoviesList";
import "../Search/ActivateSearch.css";
import "../Search/Search.css";
function AddToList(props) {
  const [content, setContent] = React.useState([]);

  const handleContent = (data) => {
    setContent(data);
  };
  const isContent = content.length > 0;

  return (
    <div>
      <TopBar></TopBar>
      <div>
        <AcivateAddToList handleContent={handleContent}></AcivateAddToList>
        {isContent && <MoviesList movies={content}></MoviesList>}
      </div>
    </div>
  );
}
export default AddToList;
