import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../../context/userContext";

const PrivateRoute = ({ path, element, ...rest }) => {
  const { user, setUser } = useContext(UserContext);
  if (!user) return <Navigate to="/login" />;
  return <Route path={path} element={element} {...rest} />;
};

export default PrivateRoute;
