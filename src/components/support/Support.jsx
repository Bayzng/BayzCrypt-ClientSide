import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './support.css'

const Support = () => {
  return (
    <div className='--support'>
        <div className='--support-second'>
            <h1></h1>
            <h1>Support</h1>
        </div>

        <p>
            For any inquiries, assistance, or support-related issues, please don't hesitate to reach out to our dedicated support team. You can contact us via email at <span className='--support-span'>@bayzcrypt.com</span>. We strive to provide timely and helpful responses to ensure a seamless experience for our users.
            Your satisfaction is our priority, and we're here to assist you with any questions or concerns you may have regarding your BayzCrypt experience.
        </p>

        <div className='--support-contact'>
            <h4> <FaPhone/> +234 814-479-6373</h4>

            <h3 > <IoMdMail/> <a href="mailto:bayzcrypt@gmail.com">bayzcrypt@gmail.com</a></h3>
        </div>

        <div className='--support-account'>
            <h1><BsTwitterX size={25}/></h1>
            <h1><FaFacebookF size={25}/></h1>
        </div>
    </div>
  )
}

export default Support