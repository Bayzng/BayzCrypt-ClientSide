import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGgCircle } from "react-icons/fa6";
import gifOne from "../../assets/gifOne.png"
import gifTwo from "../../assets/gifTwo.png"
import { Link } from 'react-router-dom';
import "./transaction.scss"

const Transaction = () => {
  return (
    <div className='--transaction-page'>
        <div className='--transaction'>
          <h3 style={{color: "green"}}>Recent Transaction</h3>
          <Link to="/maintenanceMode">
            <h4 style={{color: "red", }}>See all <FaLongArrowAltRight /></h4>
          </Link>
        </div>
        <div className='my-Transaction'>
            {/* TRANSACTION ONE */}
          <div className='--transaction-history'>
            <div className='--transaction-details'>
              <h4> <FaGgCircle color="blue" size={40} /></h4>
              <div>
                <h4 style={{marginTop: "0.5rem"}}>Sent</h4>
                <address style={{marginTop: "-13px"}}>0x690..7e1ba89e5b-g6</address>
              </div>
            </div>
            <div className='--transaction-details-second'>
              <div className='--transaction-details '>
                <img style={{width: "5rem", borderRadius: "40%", height: "4.2rem"}} src={gifOne} alt="" />
                <div>
                  <h4 style={{marginTop: "0.5rem"}}>-0.00 ETH</h4>
                  <address style={{marginTop: "-13px", marginLeft: "9rem"}}>$0.00</address>
                </div>
              </div>  
            </div>
          </div>
           {/* TRANSACTION TWO */}
          <div className='--transaction-history now'>
            <div className='--transaction-details'>
              <h4> <FaGgCircle color="blue" size={40} /></h4>
              <div>
                <h4 style={{marginTop: "0.5rem"}}>Receive</h4>
                <address style={{marginTop: "-13px"}}>0x690..7e1ba89e5b-g6</address>
              </div>
            </div>
            <div className='--transaction-details-second'>
              <div className='--transaction-details'>
              <img style={{width: "5rem", borderRadius: "40%", height: "4.2rem"}} src={gifTwo} alt="" />
                <div>
                  <h4 style={{marginTop: "0.5rem"}}>+0.00 ETH</h4>
                  <address style={{marginTop: "-13px", marginLeft: "9rem"}}>$0.00</address>
                </div>
              </div>  
            </div>
          </div>
          {/* the div below will be delete later */}
        </div>
    </div>
  )
}

export default Transaction