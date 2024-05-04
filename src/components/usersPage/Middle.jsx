import React from 'react'
import bayzImg from '../../assets/cryptImg.svg'
import Clipboard from '../clipboard/MyClipboard';
import Transaction from '../transactions/Transaction';
import { MdSwapHorizontalCircle } from "react-icons/md";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoLogoPolymer } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { Link } from 'react-router-dom';
import UserAuth from './UserAuth';


const Middle = () => {
  
  return (
    <div>
        <div className='--middle-side-header'>
            <UserAuth/>
        </div>
        <div className='--middle-side-image'>
          <img className='myImage' src={bayzImg} alt="" />
        </div>
        <div>
          <Clipboard/>
          <div className='--middle-side-amount'>
            <h3>0.00 ETH</h3>
            <p>$0.00 USD</p>
          </div>
        </div>
        <div className='--middle-side-icons'>
          <div>
            <Link>
              <h1 style={{marginTop: "-5px"}}><MdSwapHorizontalCircle size={50} color='blue'/></h1>
              <p style={{marginTop: "-19px", marginLeft: "-10px", fontSize: "10px", fontWeight: '700'}}>Swap Crypto</p>
            </Link>
          </div>
          <div style={{marginLeft: '6px', marginTop: '-2px'}}>
            <Link to=''>
              <h1 style={{marginLeft: '-6px'}}><FaArrowCircleDown size={42} color='green' /></h1>
              <p style={{marginTop: "-14px", marginLeft: "-12px",  fontSize: "10px", fontWeight: '700'}}>Recieve Crypto</p>
            </Link>
          </div>
          <div >
            <Link to="/maintenanceMode">
              <h1><FaArrowCircleUp size={40} style={{marginLeft: '-5px'}} color='red'/></h1>
              <p style={{marginTop: "-13px", marginLeft: "-1px", fontSize: "10px", fontWeight: '700'}}>Send Crypto</p>
            </Link>
          </div>
        </div>

        <div>
          <div className='--middle-side-notification'>
           <div>
            <h4><FaEthereum /> Ethereum</h4>
            <p>0.00 ETH</p>
           </div>
           <h3>$0.00</h3>
          </div>

          <div className='--middle-side-notification'>
           <div>
            <h4><IoLogoPolymer color='indigo' /> Polygon</h4>
            <p>0.00 MATIC</p>
           </div>
           <h3>$0.00</h3>
          </div>

          <div className='--middle-side-notification'>
           <div>
            <h4><FaEthereum /> Arbitrum</h4>
            <p>0.00 ARB</p>
           </div>
           <h3>$0.00</h3>
          </div>
        </div>
        <div>
          <Transaction/>
        </div>
        <div >
          {/* <h3 style={{marginTop: '5rem', textAlign: 'center', color: 'green'}}>BAYZCRYPT</h3> */}
        </div>
    </div>
  )
}

export default Middle