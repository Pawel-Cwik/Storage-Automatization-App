import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = (props) => {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to={"login"} />;
};

export default PrivateRoutes;
