import React from "react";
import { useRef } from "react";
import stockPriceService from "../utils/stockPriceService";
import "./ticker.scss";
import { logger } from "../utils/logger";
import useRenderCounter from "../utils/hooks/useRenderCounter";

export default function Ticker(props) {
  const { ticker, onRemove } = props;
  const renderCount = useRenderCounter();
  const currentPrice = stockPriceService.fetchPricesForTicker(ticker);
  const onRemoveCb = () => onRemove(ticker);
  const componentRef = useRef();

  logger.info("TickerComponent", "Begin Render");
  logger.info("TickerComponent", `ticker= ${props.ticker}`, "props");

  setTimeout(() => {
    componentRef.current.classList.add("render");
    setTimeout(() => {
      componentRef.current.classList.remove("render");
    }, 1000);
  }, 50);

  return (
    <div className="ticker" ref={componentRef}>
      <div>
        <div className="ticker-name">{props.ticker}</div>
        <div className="ticker-price">{currentPrice}</div>
        <div className="ticker-counter-render">
          {" "}
          Render Count: {renderCount}{" "}
        </div>
        <i
          className="fa fa-times-circle delete"
          onClick={onRemoveCb}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
