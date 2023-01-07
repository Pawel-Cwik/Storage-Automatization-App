import BarCodeForm from "./BarCodeForm";
import "../Search/ActivateSearch.css";
import React from "react";

export default function ActivateBarCodeSearch(props) {
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
        <BarCodeForm
          onCancel={stopEditingHandler}
          handleContent={props.handleContent}
        />
      )}
    </div>
  );
}
