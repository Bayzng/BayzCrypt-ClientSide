import React, { useEffect, useState } from 'react';
import './coinslider.css';

const CoinData = [
  { id: 1, name: "bitcoin", logoSrc: "https://bit.ly/3vNs8vh", symbol: "BTC", price: "", change: "" },
  { id: 2, name: "ethereum", logoSrc: "https://bit.ly/3kjOn6s", symbol: "ETH", price: "", change: "" },
  { id: 3, name: "solana", logoSrc: "https://bit.ly/3EMx8o5", symbol: "SOL", price: "", change: "" },
  { id: 4, name: "binancecoin", logoSrc: "https://bit.ly/3KvU0tj", symbol: "BNB", price: "", change: "" },
  { id: 5, name: "ripple", logoSrc: "https://bit.ly/3xUeI3b", symbol: "XRP", price: "", change: "" },
  { id: 6, name: "cardano", logoSrc: "https://bit.ly/3veX3BB", symbol: "ADA", price: "", change: "" },
  { id: 7, name: "chainlink", logoSrc: "https://bit.ly/38sqyqo", symbol: "LINK", price: "", change: "" },
  { id: 8, name: "polkadot", logoSrc: "https://bit.ly/3MA7ghB", symbol: "DOT", price: "", change: "" }
];

const CoinSlider = () => {
  const [coinData, setCoinData] = useState(CoinData);

  useEffect(() => {
    const generateRandomData = () => {
      const updatedCoinData = coinData.map(coin => ({
        ...coin,
        price: (Math.random() * 10000).toFixed(2), // Generate random price
        change: ((Math.random() - 0.5) * 20).toFixed(2) // Generate random change
      }));
      setCoinData(updatedCoinData);
    };

    generateRandomData();
    const interval = setInterval(generateRandomData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="price-container">
      <div className="price-box">
        {coinData.map((coin) => (
          <div key={coin.id} className={`${coin.name}-box box-styling`}>
            <img src={coin.logoSrc} alt={`${coin.name} logo`} className="logo-size" />
            <div className="inner-box-styling">
              <h4 className="currency-id">{`${coin.symbol}/USD`}</h4>
              <h4 className="price-styling">${coin.price}</h4>
              <h3 className={`change-styling ${coin.change >= 0 ? "positive-price" : "negative-price"}`}>
                {`${coin.change}%`}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinSlider;
