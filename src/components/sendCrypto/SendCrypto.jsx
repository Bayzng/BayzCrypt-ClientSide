import React from "react";
import Left from "../usersPage/Left";
import Right from "../usersPage/Right";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import UserAuth from "../usersPage/UserAuth";
import './sendCrypto.scss'

const SendCrypto = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="usersPage">
          <div id="sectionOne">
            <Left />
          </div>

          <div id="sectionTwo">
            <div className='--middle-side-header'>
              <UserAuth/>
            </div>
            <div className="--send-crypto-page">
              <h3>Send <span style={{color: "red"}}>Crypto</span></h3>
            </div>

            <form className="--send-crypto-form">
              <label className="--wallet-label" htmlFor="wallet address">Recitipant Wallet Address</label><br />
              <input className="--wallet-input" type="text" placeholder="Input Wallet Address" />
              <div className="--flex-content">
                <div className="">
                  <label className="--wallet-label" htmlFor="amount">Amount of (ETH)</label><br />
                  <input className="--wallet-amount" type="number" placeholder="Amount of (ETH)" />
                </div>
                <div>
                  <label className="--wallet-label" htmlFor="amount">Keyword (GIF)</label><br />
                  <input className="--wallet-gif" type="text" placeholder="Keyword (GIF)" />
                </div>
              </div>
              <div className="--label-message">
                <label className="--wallet-label" htmlFor="Transaction Message">Transaction Message</label><br />
                <textarea className="--wallet-input-message" placeholder="Input your transaction message" name="" id="" cols="30" rows="10"></textarea>
              </div>

              <button className="--send-btn">Send</button>
            </form>
          </div>

          <div id="sectionThree">
            <Right />
          </div>
        </div>
      )}
    </>
  );
};

export default SendCrypto;
