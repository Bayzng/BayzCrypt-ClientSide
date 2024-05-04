import React from 'react'
import binance from "../../assets/binance__1_-removebg-preview.png";
import cello from "../../assets/cello__1_-removebg-preview.png";
import bitfinex from "../../assets/bitfinex-logo__1_-removebg-preview.png"
import okx from "../../assets/OKX__new-removebg-preview.png";
import kraken from "../../assets/Kraken__1_-removebg-preview.png";
import pancake from "../../assets/pancake__1_-removebg-preview.png";
import quickswap from "../../assets/quickswap-logo__1_-removebg-preview.png";
import sushiswap from "../../assets/sushiswap-removebg-preview.png";
import uniswap from "../../assets/uniswap__1_-removebg-preview.png";
import './sectionTwo.css'

const SectionTwo = () => {
  return (
    <div>
        <div className="third-section__container">
      <h1 className="third-section__title">
      Unleash Limitless Transactions
      </h1>
      <h5 className="subtext">with our trusted liquidity from top exchanges</h5>
      <div className="third-section__partners">
        <div className="third-section__partners-one">
          <div className=" third-section__partner-section1">
            <img src={binance} alt="binance" />
            <img src={uniswap} alt="bitfinex" />
          </div>
          <div className=" third-section__partner-section2">
            <img src={sushiswap} alt="cello" />
            <img src={bitfinex} alt="binance" />
          </div>
          <div className=" third-section__partner-section3">
            <img src={kraken} alt="bitfinex" />
            <img src={pancake} alt="cello" />
          </div>
        </div>

        <div className="third-section__partners-one">
        <div className=" third-section__partner-section1">
            <img src={okx} alt="bitfinex" />
            <img src={pancake} alt="cello" />
          </div>

          <div className=" third-section__partner-section2">
            <img src={sushiswap} alt="cello" />
            <img src={bitfinex} alt="binance" />
          </div>

          <div className=" third-section__partner-section3">
            <img src={quickswap} alt="binance" />
            <img src={cello} alt="bitfinex" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionTwo