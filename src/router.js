import React from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Cashier from "./pages/Cashier";
import Auth from "./pages/Auth";

import PrivateRoute from "./utils/wrapper/PrivateRoute";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen text-center font-bold text-6xl bg-gray-500 text-black flex justify-center items-center select-none flex-col gap-4 px-4">
      <p>Page Not Found</p>
      <button className="btn w-[75%]" onClick={() => navigate("/")}>
        Back To Home
      </button>
    </div>
  );
};

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
]);

export default router;
