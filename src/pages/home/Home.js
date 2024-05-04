import React from "react";
import crytoLogo from "../../assets/homeImg.png";
import "./Home.scss";
import Loader from "../../components/loader/Loader";
import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import CoinSlider from "./CoinSlider";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <section className="container hero">
            <div className="containers">
            <div className="hero-text">
              <h2>BayzCrypt Decentralized Cryptocurrency Wallet</h2>
              <p>Safeguard your crypto with bayzCrypt today !!!</p>
              <p>
                At BayzCrypt, we've enhanced the user experience more enjoyable by developing 
                the platform to include GIFs. This addition brings more fun and enjoyment to the 
                platform, making it more engaging for users.
              </p>

              <div className="hero-buttons --flex-start">
                <Link to='/register'><button className="--btn --btn-danger">Register</button></Link>
                <Link to='/login'><button className="--btn --btn-primary">Login</button></Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={crytoLogo} alt="loginImg" />
            </div>
            </div>
            <CoinSlider/>
          <div><SectionTwo/></div>
          <div><SectionThree/></div>
          </section>
          
        </Layout>
      )}
    </>
  );
};

export default Home;
