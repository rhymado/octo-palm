import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./styles/index.css";
import router from "./router";
// import App from "./pages/Home";
// import reportWebVitals from "./reportWebVitals";
import { themeContext as ThemeContext } from "./contexts/theme";
import store, { persistor } from "./redux/store";
// import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Run({ isStrict, children }) {
  if (isStrict)
    return (
      <React.StrictMode>
        {children}
        {/* <Analytics /> */}
      </React.StrictMode>
    );
  return children;
}
function App() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    // {/* props dimasukkan sebagai atribut */}
    <Run isStrict={false}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <RouterProvider router={router} />
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    </Run>
  );
}
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
