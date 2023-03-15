import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name="Fazztrack" age={17} aria-required href={"https://reactjs.org"} />,
  },
  { path: "/home", element: <Home /> },
]);

export default router;
