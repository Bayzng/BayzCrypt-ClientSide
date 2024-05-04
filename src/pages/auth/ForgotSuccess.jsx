import React from "react";
import "./forgotSuccess.css";
import { Link } from "react-router-dom";

const ForgotSuccess = () => {
  return (
    <div className="success">
        <i class="checkmark">✓</i>
      <h1>Success</h1>
      <p className="p-success">
        Forgot password reset link has been successfully send to your gmail account
        <br /> 
      </p> 
      <p className="p-success-second">Kindly use the link provided to change your password</p>
      <Link to='/login'>
        <button className="button-login">Login</button>
      </Link>
    </div>
  );
};

export default ForgotSuccess;
