import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReduse from "./redux/user";

const store = configureStore({
  reducer: {
    user: userReduse,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
