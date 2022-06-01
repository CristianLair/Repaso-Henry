import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL ="http://localhost:3001"

ReactDOM.render(
  <Provider store ={store}>
  <React.StrictMode>
    <BrowserRouter>
        <App />
        </BrowserRouter>
  </React.StrictMode>

  </Provider>,
  document.getElementById("root")
);
