import React from 'react'
import { FaGgCircle } from "react-icons/fa"
import { useState } from 'react'

const ChangeAccount = () => {
  const [userRole, setUserRole] = useState("")
  return (
    <div>
        <form>
          <FaGgCircle size={20}/>
            <select value={userRole} onChange={(e => setUserRole(e.target.value))}>
                <option value="Account">Account</option>
            </select>
        </form>
    </div>
  )
}

export default ChangeAccount