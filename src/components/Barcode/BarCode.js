import React from "react";
import TopBar from "../Search/TopBar";
import ActivateBarCodeSearch from "./ActivateBarCodeSearch";
import ItemPropertiesBar from "../ItemsPropertiesBar";
import MoviesList from "../Search/MoviesList";

function BarCode(props) {
  const [content, setContent] = React.useState([]);

  const handleContent = (data) => {
    setContent(data);
  };
  console.log(content);
  console.log("kakakaka");
  const isContent = content.length > 0;

  return (
    <div>
      <TopBar></TopBar>
      <div>
        <ActivateBarCodeSearch
          handleContent={handleContent}
        ></ActivateBarCodeSearch>
        {<ItemPropertiesBar></ItemPropertiesBar>}
        {<MoviesList movies={content}></MoviesList>}
      </div>
    </div>
  );
}
export default BarCode;
