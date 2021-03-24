import React from "react";
import ReactDOM from "react-dom";
import Watchlist from "./components/WatchList";

import "./index.scss";
import { logger } from "./utils/logger";

const rootElement = document.getElementById("root");

window.mount = () => {
  logger.clear();
  logger.info("Index", "Mounting Ticker Component");
  document.getElementById("btnMount").disabled = true;
  document.getElementById("btnUnmount").disabled = false;
  ReactDOM.render(<Watchlist />, rootElement);
};

window.unmount = () => {
  logger.clear();
  logger.info("Index", "Unmounting Ticker Component");
  document.getElementById("btnMount").disabled = false;
  document.getElementById("btnUnmount").disabled = true;
  ReactDOM.unmountComponentAtNode(rootElement);
};
