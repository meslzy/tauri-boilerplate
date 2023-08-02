import React from "react";

import { createRoot } from "react-dom/client";

import Mantine from "~/styles/mantine";

import App from "~/app";

const app = document.getElementById("app")!;

const root = createRoot(app);

root.render((
  <Mantine>
    <App/>
  </Mantine>
));