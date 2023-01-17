import React from "react";
import TopBar from "../Search/TopBar";
import ActivateBarCodeSearch from "./ActivateBarCodeSearch";
import MoviesList from "../Search/MoviesList";

function BarCode(props) {
  const [content, setContent] = React.useState([]);

  const handleContent = (data) => {
    setContent(data);
  };
  const isContent = content.length > 0;

  return (
    <div>
      <TopBar></TopBar>
      <div>
        <ActivateBarCodeSearch
          handleContent={handleContent}
        ></ActivateBarCodeSearch>
        {isContent && <MoviesList movies={content}></MoviesList>}
      </div>
    </div>
  );
}
export default BarCode;
