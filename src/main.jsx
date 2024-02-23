import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SpeedInsights>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SpeedInsights>
);
