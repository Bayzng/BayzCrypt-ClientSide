import React from 'react'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import maintenance from '../assets/maintenanaceImg.gif'
import { Color } from 'three/src/Three.js';

const MaintenanceMode = () => {
    const {currentUser} = useContext(AuthContext)

  return (
    <div style={{textAlign: 'center'}}>
        <div style={{marginTop: "5rem"}}>
            <h3 style={{color: "#192A51"}}>Maintenance Mode</h3>
            <p>Hi, <bold style={{textTransform: "uppercase", color: "#192A51"}}>{currentUser.displayName}</bold></p>
        </div>
        <img style={{width: '35rem', marginTop: "5rem"}} src={maintenance} alt="" />
        <p style={{marginTop: "5rem"}}>Contact Our Support System</p>
        <p><span className='--support-span'>@bayzcrypt.com</span></p>
    </div>
  )
}

export default MaintenanceMode