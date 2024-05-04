import React from "react";
import Card from "../../components/card/Card";
import { useState } from "react";
import "./ChangePassword.scss";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const ChangePassword = () => {
  const initialState = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const { oldPassword, newPassword, confirmNewPassword } = formData;

  const handleInputChange = () => {};

  return (
    <>
      <section className="container">
        <div style={{marginTop: "5rem"}}>
          <PageMenu/>
        </div>

        <h2>Change Password</h2>
        <div className="--flex-start change-password">
          <Card cardClass={"card"}>
            <>
              <form>
                <p>
                  <label>Current Password:</label>
                  <PasswordInput
                    placeholder="Old Password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Confirm New Password:</label>
                  <PasswordInput
                    placeholder="Confirm Password"
                    name="confirmNewPassword"
                    value={confirmNewPassword}
                    onChange={handleInputChange}
                  />
                </p>
                <button className="--btn --btn-danger --btn-block">
                  Change Password
                </button>
              </form>
            </>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
