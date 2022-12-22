import React from "react";
import SearchForm from "./SearchForm";
import "./ActivateSearch.css";
export default function ActivateSearch(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="search-form">
      {!isEditing && <button onClick={startEditingHandler}>Search</button>}
      {isEditing && (
        <SearchForm
          onCancel={stopEditingHandler}
          handleContent={props.handleContent}
        />
      )}
    </div>
  );
}
