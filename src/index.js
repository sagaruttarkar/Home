import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // <-- correct import
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/vismit"> {/* set base path */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
