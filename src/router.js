import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Cashier from "./pages/Cashier";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/NotFound";
import Notes from "./pages/Notes";

import PrivateRoute from "./utils/wrapper/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} />,
    errorElement: <PageNotFound />,
  },
  { path: "/home", element: <Home /> },
  {
    path: "/counter",
    element: <Counter title="Calculator" />,
  },
  {
    path: "/cashier",
    element: (
      <PrivateRoute>
        <Cashier />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
]);

export default router;
