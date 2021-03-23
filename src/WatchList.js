import React from "react";
import { useState, useRef } from "react";
import "./watchList.scss";
import Ticker from "./Ticker";
import { logger } from "./utils/logger";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(["AAPL", "FB", "MSFT", "NFLX"]);
  const componentRef = useRef();

  logger.info("Watchlist", "Begin Render");
  logger.info(
    "WatchlistComponent",
    `watchlist= ${watchlist.join(", ")}`,
    "useState"
  );

  setTimeout(() => {
    componentRef.current.classList.add("render");
    setTimeout(() => {
      componentRef.current.classList.remove("render");
    }, 1000);
  }, 50);

  const onRemove = (tickerToRemove) => {
    logger.info(
      "WatchlistComponent",
      `[user action] - remove ticker (${tickerToRemove})`
    );
    logger.info("WatchlistComponent", `setWatchlist`, "useState");

    setWatchlist(watchlist.filter((ticker) => ticker !== tickerToRemove));
  };

  return (
    <div className="watchlist" ref={componentRef}>
      {watchlist.map((ticker, index) => {
        return <Ticker key={ticker} ticker={ticker} onRemove={onRemove} />;
      })}
    </div>
  );
}
