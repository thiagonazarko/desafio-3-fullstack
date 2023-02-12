import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { RegisterClientPage } from "../pages/RegisterClient";
import { UserContext } from "../providers/Users";

import { LoginOrRegisterRoute, ProtectedRoute } from "./route";

export const AppRoutes = () => {
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Routes>
      <Route index element={<LoginOrRegisterRoute element={<LoginPage />} />} />
      <Route
        path="register"
        element={<LoginOrRegisterRoute element={<RegisterPage />} />}
      />

      <Route path="home" element={<ProtectedRoute element={<HomePage />} />} />
      <Route
        path="home/client"
        element={<ProtectedRoute element={<RegisterClientPage />} />}
      />
    </Routes>
  );
};
