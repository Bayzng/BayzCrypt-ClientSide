import React from 'react'
import "./userStats.scss"
import { FaUsers } from "react-icons/fa"
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi"
import InfoBox from '../infoBox/InfoBox'

const iconOne = <FaUsers size={40} color="#fff"/>
const iconTwo = <BiUserCheck size={40} color="#fff"/>
const iconThree = <BiUserMinus size={40} color="#fff"/>
const iconFour = <BiUserX size={40} color="#fff"/>

const UserStats = () => {
  return (
    <div className='user-summary'>
        <h3 className='--mt'>User Stats (NFT)</h3>
        <div className="info-summary">
            <InfoBox icon={iconOne} title={"Total Users"} count={"0"} bgColor="card1"/>
            <InfoBox icon={iconTwo} title={"Verified Users"} count={"0"} bgColor="card2"/>
            <InfoBox icon={iconThree} title={"Unverified Users"} count={"0"} bgColor="card3"/>
            <InfoBox icon={iconFour} title={"Suspended Users"} count={"0"} bgColor="card4"/>
        </div>
    </div>
  )
}

export default UserStats