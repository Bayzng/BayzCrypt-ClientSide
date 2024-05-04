import React from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { GrInsecure } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginCode = () => {
  const [loginCode, setLoginCode] = useState("");

  const handleInputChange = () => {};
  const loginUser = () => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>

          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Access Code"
              required
              name="accesscode"
              value={loginCode}
              onChange={(e) => setLoginCode(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Preceed To Login
            </button>
            <span className="--flex-center">
              Check your email for login access code
            </span>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link> &nbsp; &nbsp;
              </p>
              <p className="v-link --color-primary">
                <b>Resend Code</b>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginCode;
