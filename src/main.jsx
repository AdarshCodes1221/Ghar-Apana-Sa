// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App"; // Main App component

// Create a root and render the App inside the div with id "root" in index.html
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
