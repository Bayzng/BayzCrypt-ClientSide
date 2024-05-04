import React from 'react'
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import './passwordInput.scss';

const PasswordInput = ({ placeholder, value, onChange, name, onPaste}) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='password'>
      <input type={showPassword ? "text" : "password"} placeholder={placeholder} required name={name} value={value} onChange={onChange} onPaste={onPaste}/>
      <div className="icon" onClick={togglePassword}>
        {showPassword ? (
          <AiOutlineEyeInvisible size={28}/>
        ) : (
           <AiOutlineEye size={20}/>
        )}
      </div>
    </div>
  )
}

export default PasswordInput