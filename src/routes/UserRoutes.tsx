import React from "react";
import { Route, Routes } from "react-router";
import Client from "../pages/Client";
import HomePage from "../pages/HomePage";
import Operator from "../pages/Operator";
import Registrator from "../pages/Registrator";
import Admin from "../pages/Admin";

const UserRoutes = () => {
  const USER_ROUTES = [
    { id: 1, path: "/", element: <HomePage /> },
    { id: 2, path: "/client", element: <Client /> },
    { id: 3, path: "/operator", element: <Operator /> },
    { id: 4, path: "/registrator", element: <Registrator /> },
    { id: 5, path: "/admin", element: <Admin /> },
    { id: 6, path: "*", element: <h2>wrong</h2> },
  ];
  return (
    <Routes>
      {USER_ROUTES.map((user) => (
        <Route
          key={user.id}
          path={user.path}
          element={user.element}
        />
      ))}
    </Routes>
  );
};

export default UserRoutes;
