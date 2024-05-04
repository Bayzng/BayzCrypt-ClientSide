import React from 'react'
import { FaViacoin } from 'react-icons/fa'
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const activeLink = ({isActive}) => (isActive ? "active" : "")


const Header = () => {
  
  const navigate = useNavigate()

  const goHome= () => {
    navigate("/")
  }

  return (
    <header className='header'>
      <nav>
        <div className='logo' onClick={goHome}>
          <FaViacoin/> &nbsp;
          <span>BayzCrypt</span>
        </div>
        <div className='header-nav'>
          <h1>Wallet</h1>
        </div>
        <div className='header-icon'>
          <FaBars />
        </div>
      </nav>
    </header>
  )
}

export default Header