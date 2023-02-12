import BarCodeForm from "./BarCodeForm";
import "../Search/ActivateSearch.css";
import React, { useEffect } from "react";

import { useMediaQuery } from "react-responsive";

export default function ActivateBarCodeSearch(props) {
  const [isEditing, setIsEditing] = React.useState(false);

  const [iD, setID] = React.useState("Null");
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    setID(props.dataParentToChild);
  }, [props.dataParentToChild]);
  // const handleID = (data) => {
  //   setID(props.dataParentToChild);
  // };
  console.log("RATATATATAT", iD);

  return (
    <div className="search-form">
      {!isEditing && (
        <button onClick={startEditingHandler}>Wyszukaj po kodzie QR</button>
      )}
      {isEditing && (
        <BarCodeForm
          dataParentToChild2={iD}
          onCancel={stopEditingHandler}
          handleContent={props.handleContent}
          activateQR={props.activateQR}
          sendConfirmSearch={props.handleConfirmSearch}
        />
      )}
    </div>
  );
}
