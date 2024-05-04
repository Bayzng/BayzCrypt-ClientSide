import React from "react";
import PageMenu from "../pageMenu/PageMenu";
import Left from "../usersPage/Left";
import Right from "../usersPage/Right";
import UserAuth from "../usersPage/UserAuth";
import gifOne from "../../assets/gifOne.png";
import gifTwo from "../../assets/gifTwo.png";
import gifThree from "../../assets/gifThree.GIF";
import gifFour from "../../assets/gifFour.JPG";
import gifFive from "../../assets/gifFive.PNG";
import { useState, useEffect } from "react";
import "./allTransaction.scss";
import Loader from "../loader/Loader";

const AllTransactions = () => {
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
            <div className="--middle-side-header">
              <UserAuth />
            </div>
            <div className="--send-crypto-page">
              <h3 style={{ marginTop: "5rem" }}>All Transaction</h3>
            </div>
            <div className="--flex-contents">
              <div>
                <img className="--gif-image" src={gifOne} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="--gif-image" src={gifTwo} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="--gif-image" src={gifThree} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="--gif-image" src={gifFour} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="--gif-image" src={gifFive} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="--gif-image" src={gifTwo} alt="" />
                <div className="--flex-contents-details">
                  <div className="info-1">
                    <div>
                      <p>From</p>
                    </div>
                    <div>
                      <p style={{ color: "indigo" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-2">
                    <div>
                      <p>To</p>
                    </div>
                    <div>
                      <p style={{ color: "green" }}>yghvwb..whegy</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-3">
                    <div>
                      <p>Amount</p>
                    </div>
                    <div>
                      <p>0.00 ETH</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-4">
                    <div>
                      <p>Gif Keyword</p>
                    </div>
                    <div>
                      <p style={{ color: "red", fontWeight: "900" }}>Wow</p>
                    </div>
                  </div>
                </div>
                <div className="--flex-contents-details">
                  <div className="info-5">
                    <div>
                      <p>D/T</p>
                    </div>
                    <div>
                      <p>1st Jan 2024</p>
                      <p style={{ marginLeft: "3.6rem" }}>0:00AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="sectionThree">
            <Right />
          </div>
        </div>
      )}
    </>
  );
};

export default AllTransactions;
