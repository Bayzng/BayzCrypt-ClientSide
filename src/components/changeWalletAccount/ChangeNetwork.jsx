import React from 'react'
import { useState } from 'react'
import './changeWalletAccount.scss'
import { FaEthereum } from "react-icons/fa"
import ChangeAccount from './ChangeAccount'

const ChangeNetwork = () => {
  const [userRole, setUserRole] = useState("")

  const image = <FaEthereum/>

  return (
    <div className="--change-wallet-account">
        <form>
        <FaEthereum size={20} />
            <select id='select' value={userRole} onChange={(e => setUserRole(e.target.value))}>
                <option value="ethereum">Ethereum</option>
            </select>
        </form>
        <div>
          <ChangeAccount/>
        </div>
    </div>
  )
}

export default ChangeNetwork