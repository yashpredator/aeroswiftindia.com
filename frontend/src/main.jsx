
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "slick-carousel/slick/slick-theme.css"; // Move this from SCSS to here

import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css"
import store from "./redux/store/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);