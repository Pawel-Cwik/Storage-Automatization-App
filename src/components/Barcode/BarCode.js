import React, { useEffect } from "react";
import TopBar from "../Search/TopBar";
import ActivateBarCodeSearch from "./ActivateBarCodeSearch";
import MoviesList from "../Search/MoviesList";
import Test from "./Test";
import { useMediaQuery } from "react-responsive";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function BarCode(props) {
  const navigate = useNavigate();

  function wrongDevice() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Niepoprawny typ urządzenia.",
        text: "Ta strona jest dostępna tylko na urządzeniach mobilnych.",
        icon: "warning",

        confirmButtonColor: "#3085d6",

        confirmButtonText: "Wróć do strony głównej.",

        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/Home");
        }
      });
  }
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [content, setContent] = React.useState([]);
  const [klik, setKlik] = React.useState("");
  const [id, setId] = React.useState("");
  const [show, setShow] = React.useState("");
  const [letConfirmButtonFromQrReader, setLetConfirmButtonFromQrReader] =
    React.useState(false);

  const letConfirmButtonTrue = () => {
    setLetConfirmButtonFromQrReader(true);
  };
  const letConfirmButtonFalse = () => {
    setLetConfirmButtonFromQrReader(false);
    console.log("letConfirmButtonFalse");
  };

  const handleConfirmSearch = () => {
    setShow(true);
  };
  const handleKlik = () => {
    setKlik(true);
  };
  const handleKlik2 = (data) => {
    console.log(data);
    setKlik(false);
    setId(data);

    isContent = false;

    // props.handleID(data);
  };
  const handleContent = (data) => {
    setContent(data);
  };
  console.log(klik);

  let isContent = content.length > 0;
  const unHandleKlik = () => {
    setKlik(false);
    console.log("unHandleKlik");
  };
  useEffect(() => {
    if (isContent && klik) {
      setShow(false);
    }
  }, [isContent, klik]);

  return (
    <div>
      {!isDesktopOrLaptop && (
        <div>
          <TopBar></TopBar>
          {wrongDevice()}
        </div>
      )}
      {!isTabletOrMobile && (
        <div>
          <div>
            <ActivateBarCodeSearch
              dataParentToChild={id}
              handleContent={handleContent}
              activateQR={handleKlik}
              handleConfirmSearch={handleConfirmSearch}
              letConfirmButtonActivate={letConfirmButtonFromQrReader}
              deactivateComfirmButtonInBarCode={letConfirmButtonFalse}
            ></ActivateBarCodeSearch>
            {show && (
              <MoviesList
                movies={content}
                dataParentToChild3={klik}
              ></MoviesList>
            )}
            {}
            {/* {!show && isContent && (
          <MoviesList movies={content} dataParentToChild3={klik}></MoviesList>
        )} */}
          </div>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {klik === true && (
              <Test
                stopSearchingQR={handleKlik2}
                letConfirmButton={letConfirmButtonTrue}
              ></Test>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default BarCode;
