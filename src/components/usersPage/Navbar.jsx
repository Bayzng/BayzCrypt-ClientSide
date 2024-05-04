import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { BiX } from "react-icons/bi";
import { useState } from 'react';
import './middle.css'
import { MdGridView } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SiJsonwebtokens } from "react-icons/si";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { RiAdminFill } from "react-icons/ri";
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';



const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
        
            <div className="form-inline ml-auto">
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <CiMenuFries />
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <Link to='/usersPage'><h4 className="mb-0">BAYZCRYPT</h4></Link>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <BiX />
            </div>
          </div>
          <div className="sd-body">
          <ul>
        <li>
          <Link>
            <a className="sd-link">
              <MdGridView /> &nbsp; OVERVIEWS
            </a>
          </Link>
        </li>
        <li>
          <Link to='/maintenanceMode'>
            <a className="sd-link">
              <IoSettingsOutline /> &nbsp; SETTINGS
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a className="sd-link">
              <SiJsonwebtokens /> &nbsp; DAPP
            </a>
          </Link>
        </li>
        <li>
          <Link to='/maintenanceMode'>
            <a className="sd-link">
              <AiOutlineTransaction /> &nbsp; TRANSACTIONS
            </a>
          </Link>
        </li>
        <li>
          <Link>
            <a className="sd-link">
              <IoIosNotificationsOutline /> &nbsp; NOTIFICATIONS
            </a>
          </Link>
        </li>
        <li>
          <Link to='/support'>
            <a className="sd-link">
              <BsTelephoneOutbound /> &nbsp; SUPPORTS
            </a>
          </Link>
        </li>
        <li>
          <Link to='/faq'>
            <a className="sd-link">
              <FaQuoteLeft /> &nbsp; FAQ
            </a>
          </Link>
        </li>
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
      <div className="--all-settings-last">
        <h2>
          <CiLogout size={24} color="red" />
        </h2>
        <Link to="/">
          <h4 onClick={() => signOut(auth)} className="--last-h4">
            Logout
          </h4>
        </Link>
      </div>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>


      </div>
  )
}

export default Navbar