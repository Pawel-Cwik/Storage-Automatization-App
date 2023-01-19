import React from "react";
import Swal from "sweetalert2";

function AddingAlertConfirm(props) {
  console.log("props tutaj!");
  console.log(props.nazwa);
  return Swal.fire(
    "Pomyślnie dodano przedmiot",
    `Przedmiot ${props.nazwa} został dodany do bazy danych`,
    "success"
  );
}

export default AddingAlertConfirm;
