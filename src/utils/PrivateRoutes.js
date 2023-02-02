import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import Login from "../components/Login";
import TopBar from "../components/Search/TopBar";
const PrivateRoutes = (props) => {
  const [response, setResponse] = React.useState("");
  const handleResponse = (data) => {
    setResponse(data);
    console.log(response);
  };

  let auth = { token: props };
  return auth.token ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoutes;
