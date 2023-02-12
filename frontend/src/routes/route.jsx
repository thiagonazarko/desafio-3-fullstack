import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/Users";

export const ProtectedRoute = ({ element: Element }) => {
  const { userToken } = useContext(UserContext);

  if (!userToken) {
    return <Navigate to="/" />;
  }

  return <>{Element}</>;
};

export const LoginOrRegisterRoute = ({ element: Element }) => {
  const { userToken } = useContext(UserContext);

  if (userToken) {
    return <Navigate to="/home" />;
  }

  return <>{Element}</>;
};
