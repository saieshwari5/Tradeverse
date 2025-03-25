import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  
import "./styles/Dashboard.css";  
import "./index.css"; 

const rootElement = document.getElementById("root");
if (!rootElement) {
    console.error("❌ ERROR: Root element not found!");
} else {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
}
