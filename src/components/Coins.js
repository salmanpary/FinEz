import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import axios from "axios";

const Coins = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  useEffect(() => {
    let priceInterval = setInterval(() => {
      axios
        .get("https://fineazy-backend.herokuapp.com/getprice/home")
        .then((res) => {
          setIsLoaded(true);
          setItems(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
          setIsLoaded(true);
          setError(err);
        });
    }, 3000);
    return () => {
      clearInterval(priceInterval);
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="text-3xl">Popular coins</div>
        <div className="grid grid-cols-4">
          <div className="name">Name</div>
          <div>Last Price</div>
          <div>24h Change</div>
          <div>Volume</div>
        </div>

        <Coin
          image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/bnb.png"
          name={items?.["0"]?.name}
          lastprice={items?.["0"]?.price}
          hrchange={items?.["0"]?.priceChangePercent}
          volume={items?.["0"].volume}
          ticker="BNB"
        />
        <Coin
          image={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/btc.png`}
          name={items?.["1"]?.name}
          lastprice={items?.["1"]?.price}
          hrchange={items?.["1"]?.priceChangePercent}
          volume={items?.["1"].volume}
          ticker="BNB"
        />
        <Coin
          image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/eth.png"
          name={items?.["2"]?.name}
          lastprice={items?.["2"]?.price}
          hrchange={items?.["2"]?.priceChangePercent}
          volume={items?.["2"].volume}
          ticker="BNB"
        />
        <Coin
          image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/sol.png"
          name={items?.["3"]?.name}
          lastprice={items?.["3"]?.price}
          hrchange={items?.["3"]?.priceChangePercent}
          volume={items?.["3"].volume}
          ticker="BNB"
        />
        <Coin
          image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/doge.png"
          name={items?.["4"]?.name}
          lastprice={items?.["4"]?.price}
          hrchange={items?.["4"]?.priceChangePercent}
          volume={items?.["4"].volume}
          ticker="BNB"
        />
      </>
    );
  }
};

export default Coins;
