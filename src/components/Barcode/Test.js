import React, { useState } from "react";

import { QrReader } from "react-qr-reader";
import Swal from "sweetalert2";
const Test = (props) => {
  const [isSearchingQR, setIsSearchingQR] = useState(true);
  const [data, setData] = useState("No Result");
  const startSearchingQR = () => {
    setIsSearchingQR(true);
  };

  return (
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          setData(result?.text);
          props.stopSearchingQR(result?.text);
          props.letConfirmButton();
          let timerInterval;
          Swal.fire({
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const b = Swal.getHtmlContainer().querySelector("b");
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft();
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
          });
          return;
        }

        if (!!error) {
          //console.info(error);
        }
      }}
      constraints={{ facingMode: "environment" }}
      containerStyle={{ width: "50%", height: "50%" }}
      videoStyle={{
        borderRadius: "50px",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      videoContainerStyle={{
        borderRadius: "50px",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
};

export default Test;
