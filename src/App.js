import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppRouter,{history} from "./Router/AppRouter";
import configureStore from "./Store/configureStore";
import { Provider } from "react-redux";
import { setTextFilter } from "./Actions/Filters";
import {firebase} from"./Firebase/firebase";
import "./Styles/mysass.scss";
function App() {
  const store = configureStore;
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}


export default App;

