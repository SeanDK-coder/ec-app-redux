import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const store = createStore(); //createStore을 실행해야 store가 만들어짐. 실행한 것 결과를 store란 정수에 넣어줌

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
