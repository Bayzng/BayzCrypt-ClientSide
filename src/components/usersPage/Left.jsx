import React from 'react'
// import Settings from '../sideBar/SideBar';
import SideBar from '../sideBar/SideBar';
import './userPage.scss';
import { FaViacoin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Left = () => {
  return (
    <div className='--left-side-header'>
        <Link to="/">
          <div style={{display: "flex", gap: "5px"}}>
            <h2><FaViacoin color='green'/></h2>
            <h3 style={{color: "green"}}>BayzCrypt</h3>
          </div>
        </Link>
        <div className='--user-settings'>
            <SideBar/>
        </div>
    </div>
  )
}

export default Left