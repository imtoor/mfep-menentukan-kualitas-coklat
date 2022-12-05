import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./main-component/App/App";
import * as serviceWorker from "./serviceWorker";
import "./css/font-awesome.min.css";
import "./css/themify-icons.css";
import "./css/flaticon.css";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
