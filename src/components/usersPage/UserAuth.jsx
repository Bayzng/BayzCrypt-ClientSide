import React from 'react'
import { useContext } from 'react';
import ChangeNetwork from "../changeWalletAccount/ChangeNetwork";
import { AuthContext } from '../context/AuthContext'
import Navbar from './Navbar';
import Context from '../../context/data/Context';
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";

const UserAuth = () => {

  const context = useContext(Context);
  const { mode, toggleMode } = context;
  const {currentUser} = useContext(AuthContext)
  return (
    <>
      <div className='--nav-section'>
        <div>
          <div className='usersAuth'>
            <img style={{width: '6rem', height: "5.7rem", borderRadius: '40px'}} src={currentUser.photoURL} alt="" />
            <h4 style={{textTransform: "uppercase", fontSize: "16px"}}>Hi, <>{currentUser.displayName}</></h4> <br />
          </div>
          <p className='usersP'>Send crypto with ease.</p>
          {/* <hr /> */}
        </div>
        <Navbar/>
      </div>


      <div>
        <ChangeNetwork />
      </div>


     {/* TOGGLE */}
{/*      
      <div className="flex lg:ml-6">
        <button className="" onClick={toggleMode}>
          {mode === "light" ? (
            <FiSun className="" size={30} />
          ) : "dark" ? (
            <BsFillCloudSunFill size={30} />
          ) : (
            ""
          )}
        </button>
      </div> */}
      
    </>
  );
};

export default UserAuth;
