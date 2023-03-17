import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/index.css";
import router from "./router";
// import App from "./pages/Home";
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Run({ isStrict, children }) {
  if (isStrict) return <React.StrictMode>{children}</React.StrictMode>;
  return children;
}
root.render(
  // {/* props dimasukkan sebagai atribut */}
  <Run isStrict={false}>
    <RouterProvider router={router} />
  </Run>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
