import React from "react";
import ChangeAccount from "../changeWalletAccount/ChangeAccount";
import cryptoChain from "../../assets/cryptoChat.png"
import { RiAdminFill } from "react-icons/ri";
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import './middle.css'

import { Link } from "react-router-dom";

const Right = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="--right-side-header">
      <h4>Balance Overtime</h4>
      <hr />
      <div className="--right-side-amount">
        <h4 style={{ fontSize: "15px" }}>Total Balance</h4>
        <p>$0.00</p>
        <img style={{ width: "25rem" }} src={cryptoChain} alt="" />
      </div>
      <div className="sd-bod">
        <ul>
        {currentUser?.email === "bayzcrypt2024@gmail.com" ? (
          <li className="flow-root">
            <Link
              to={"/users"}
              className=""
            >
              <a className="sd-link">
              <RiAdminFill /> &nbsp; ADMIN
            </a>
            </Link>
          </li>
        ) : (
          ""
        )}
        </ul>
        <ul>
          <li className="flow-root">
            <Link
              to={"/faq"}
              className=""
            >
              <a className="sd-link">
              <RiAdminFill /> &nbsp; FAQ
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Right;
