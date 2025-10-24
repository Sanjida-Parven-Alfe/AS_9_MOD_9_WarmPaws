// PrivateRouter.jsx
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/Login" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRouter;
