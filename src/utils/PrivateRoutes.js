import { Outlet, Navigate } from "react-router-dom";
import React from "react";
const PrivateRoutes = (props) => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoutes;
