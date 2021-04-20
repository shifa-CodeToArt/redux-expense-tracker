import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppRouter, { history } from "./Router/AppRouter";
import { firebase } from "./Firebase/firebase";
import { startSetExpenses } from "./Actions/Expenses";
import store from "./Store/configureStore";
import {login,logout} from "./Actions/Auth"
const hasRendered = false;

let renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById("root"));
    let hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
      console.log("log in");
    });
  } else {
    store.dispatch(logout())
    history.push("/");
    renderApp();
    console.log("log out");
  }
});
