import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Cashier from "./pages/Cashier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} />,
  },
  { path: "/home", element: <Home /> },
  {
    path: "/counter",
    element: <Counter title="Calculator" />,
  },
  {
    path: "/cashier",
    element: <Cashier />,
  },
]);

export default router;
