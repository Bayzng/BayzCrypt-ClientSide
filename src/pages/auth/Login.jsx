import React from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { FaViacoin } from 'react-icons/fa'
import { useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import login from '../../assets/loginImg.gif'


const Login = () => {

  const google = () => {
    alert('Currently not available, make use of the other options below')
  }

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/usersPage")
    } catch (err) {
      setErr('Invalid login parameters');
    }
  };

  return (
    <div className={`container ${styles.auth}` }>
      <div className={styles.reg}>
        <img src={login} alt="" />
      </div>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <FaViacoin size={35}/>
          </div>
          <h2>Welcome Back!</h2>
          <p style={{textAlign: 'center', marginBottom: '3rem'}}>Please enter your details</p>
          <div className="--flex-center">
            <button onClick={google} className="--btn --btn-google">Login with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email Address</label>
                <input type="email" placeholder="example@gmail.com" required name="email"/>
                <label htmlFor="password">Password</label>
                <PasswordInput placeholder="Password" name="password"/>
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
                {err && <div style={{marginTop: '5px', color: "red", marginBottom: '5px', fontSize: '15px'}}>{err}</div>}
            </form>
            <Link to='/forgot'>Forgot password</Link>
            <span style={{display: 'flex', marginTop: '15px'}}>
              <p> &nbsp;Don't have an Account? &nbsp;</p> 
              <h3 style={{marginTop: '-10px'}}><Link to='/register'>Register</Link></h3>
            </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
