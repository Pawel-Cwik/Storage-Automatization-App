import Swal from "sweetalert2";
import "./AddingAlert.css";
const AddingAlert = (props, handleConfirm) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Na pewno chcesz dodać ten przedmiot?",
      text:
        "Taki przedmiot istnieje już w bazie danych, czy mimo to chcesz go dodać?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Dodaj przedmiot, mimo to.",
      cancelButtonText: "Nie, anuluj.",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Dodano!",
          `Przedmiot ${props.nazwa}, został dodany do bazy danych`,
          "success"
        );
        handleConfirm(true);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Anulowano",
          "Przedmiot nie został dodany do bazy danych.",
          "error"
        );
      }
    });
};

export default AddingAlert;
