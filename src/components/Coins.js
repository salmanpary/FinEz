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
        <div className="ml-20 mr-20">
          <div className="text-3xl mb-4 text-gradient font-medium">Popular coins</div>
          <div className="grid grid-cols-4">
            <div className="name text-gray-300 text-sm ml-3">Name</div>
            <div className="text-gray-300 text-sm ml-1">Last Price</div>
            <div className="text-gray-300 text-sm ">24h Change</div>
            <div className="text-gray-300 text-sm -ml-2">Volume</div>
          </div>


          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/bnb.png"
            name={items?.["0"]?.name}
            lastprice={items?.["0"]?.price.substring(0, 7)}
            hrchange={items?.["0"]?.priceChangePercent}
            volume={items?.["0"]?.volume.substring(0, 9)}
            ticker="BNB"

          />
          <Coin
            image={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/btc.png`}
            name={items?.["1"]?.name}
            lastprice={items?.["1"]?.price.substring(0, 7)}
            hrchange={items?.["1"]?.priceChangePercent}
            volume={items?.["1"]?.volume.substring(0, 9)}
            ticker="BNB"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/eth.png"
            name={items?.["2"]?.name}
            lastprice={items?.["2"]?.price.substring(0, 7)}
            hrchange={items?.["2"]?.priceChangePercent}
            volume={items?.["2"]?.volume.substring(0, 9)}
            ticker="BNB"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/sol.png"
            name={items?.["3"]?.name}
            lastprice={items?.["3"]?.price.substring(0, 7)}
            hrchange={items?.["3"]?.priceChangePercent}
            volume={items?.["3"]?.volume.substring(0, 9)}
            ticker="BNB"
          />
          <Coin
            image="https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@bea1a9722a8c63169dcc06e86182bf2c55a76bbc/32/color/doge.png"
            name={items?.["4"]?.name}
            lastprice={items?.["4"]?.price.substring(0, 7)}
            hrchange={items?.["4"]?.priceChangePercent}
            volume={items?.["4"]?.volume.substring(0, 9)}
            ticker="BNB"
          />
          <br></br>
        </div>
      </>
    );
  }
};

export default Coins;
