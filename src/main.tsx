import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { App } from "@app/AppLayout";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
