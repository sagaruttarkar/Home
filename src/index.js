import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Use HashRouter for GitHub Pages
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter basename="/VISMIT">
    <App />
  </BrowserRouter>
  </React.StrictMode>
);
