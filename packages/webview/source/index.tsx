import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app";

const element = document.getElementById("app");

if (element) ReactDOM.createRoot(element).render(
  <App/>
);