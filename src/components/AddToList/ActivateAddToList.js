import AddToListForm from "./AddToListForm";

import React from "react";

export default function ActivateAddToList(props) {
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
        <AddToListForm
          onCancel={stopEditingHandler}
          handleContent={props.handleContent}
        />
      )}
    </div>
  );
}
