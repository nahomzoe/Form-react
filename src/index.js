import React from "react";
import ReactDOM from "react-dom";
//import ReactDOMClient from "react_dom/client";
import "./index.css";
import App from "./App";

/*const container = document.getElementById("root");
const root = ReactDOMClient.creatRoot(container);

root.render(<App />);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
