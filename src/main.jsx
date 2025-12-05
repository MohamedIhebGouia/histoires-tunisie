import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Import Bootstrap CSS + JS bundle (JS pour les composants interactifs)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Import small custom CSS to tweak visuals
import "./styles.css";

/*
  Entry point:
  - BrowserRouter fournit le routage pour l'application SPA.
  - createRoot est l'API moderne de React pour monter l'app.
*/
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);