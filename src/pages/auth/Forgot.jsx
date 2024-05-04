import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AuthModal from './AuthModal';
import { ToastContainer, toast } from 'react-toastify';
import PopModal from '../../components/Modal/PopModal';
import forgot from '../../assets/forgotImg.gif'
import 'react-toastify/dist/ReactToastify.css';

const Forgot = () => {
  const navigate = useNavigate();

  const [time, SetTime] = useState(true);

  const [restart, setRestart] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const myEmail = e.target.email.value;
    sendPasswordResetEmail(auth, myEmail).then(data => {
      toast.success('Reset email sent successfully')
    }).catch(err => {
      toast.error('Invalid')
    })
    setRestart("")

    if (toast.success) {
      
      setTimeout(() => {
       navigate('/success') 
      SetTime(false)
    }, 5000) 
    } else {
      navigate('/forgot')
    }
  }

  // forgot

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Forgot Password</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input value={restart} onChange={(e) => setRestart(e.target.value)} type="email" placeholder="Input Your Email" required name="email"/>
            <button  type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
              <ToastContainer />
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/"> Home</Link> &nbsp; &nbsp;
              </p>
              <p>
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
      <div className={styles.reg}>
        <img src={forgot} alt="" />
      </div>
    </div>
  )
}

export default Forgot