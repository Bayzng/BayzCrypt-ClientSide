import React from 'react'
import { Link } from 'react-router-dom'
import './forgotSuccess.css'
import success from '../../assets/success.png'
import { useEffect } from 'react'

import { runFireworks } from '../../libs/utils'


const RegisterationSuccess = () => {

  useEffect(() => {
    localStorage.clear();
    runFireworks();
  }, []);



  return (
    <div className='--reg-success'>
        <h1>Success !</h1>
        <h3>Registration Successfull</h3>
        <img className='regImg' src={success} alt="" />
        <p>Kindly Proceed to login</p>
        <Link to='/login'>
        <button className="button-login">Login</button>
      </Link>
    </div>
  )
}

export default RegisterationSuccess