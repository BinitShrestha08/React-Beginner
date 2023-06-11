import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // runs code twice to check for bugs
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
