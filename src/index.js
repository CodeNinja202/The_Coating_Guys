import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';

import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  <React.Fragment>
  <CssBaseline />
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.Fragment>
  </React.StrictMode>
);
