import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DashboardRoute } from "./DashboardRoute";
import LoginScreem from "../components/LoginScreem";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreem />
            </PublicRoute>
          }
        />

        {/* <Route path="/login" element={<LoginScreem />} /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoute />
            </PrivateRoute>
          }
        />

        {/* <Routes path="/*"      element={ <DashboardRoute /> } /> */}
      </Routes>
    </BrowserRouter>
  );
};
