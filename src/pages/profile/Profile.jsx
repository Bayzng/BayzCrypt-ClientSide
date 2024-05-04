import React from "react";
import Card from "../../components/card/Card";
import { useState } from "react";
import { useContext } from 'react';
import './Profile.scss'
import PageMenu from "../../components/pageMenu/PageMenu";
import { AuthContext } from '../../components/context/AuthContext'

const Profile = () => {
  const {currentUser} = useContext(AuthContext)

    const initialState = {
        name: "Bayz",
        email: "bayo@gmail.com",
        phone: "",
        bio: "",
        photo: "",
        role: "",
        isVerify: false,
    }

    const [profile, setProfile] = useState(initialState)

    const handleImageChage = () => {}
    const handleInputChage = () => {}


  return (
    <>
      <section className="container">
        <div style={{marginTop: "5rem", position: 'relative'}}>
          <PageMenu/>
        </div>

        <h2>Hi, <bold style={{textTransform: "uppercase"}}>{currentUser.displayName}</bold></h2>
        <div className="--flex-start profile">
          <Card cardClass={"card"}>
            <>
              <div className="profile-photo">
                <div>
                    <img src={currentUser.photoURL} alt="profileImg" />
                    <h3>Role: Subscriber</h3>
                </div>
              </div>
              <form>
                <p>
                    <label>Change Photo:</label>
                    <input type="file" accept="image/*" name="image" onChange={handleImageChage} />
                </p>
                <p>
                    <label>Name:</label>
                    <input style={{textTransform: "uppercase"}} type="text" name="name" value={currentUser.displayName} onChange={handleInputChage} />
                </p>
                <p>
                    <label>Email:</label>
                    <input type="email" name="email" value={currentUser.email} onChange={handleInputChage} disabled />
                </p>
                <p>
                    <label>Bio:</label>
                    <input type="text" name="phone" value={profile.phone} onChange={handleInputChage} />
                </p>
                <p>
                    <label>Phone Number:</label>
                    <input type="number" name="bio" value={profile.bio} onChange={handleInputChage}></input>
                </p>
                <button className="--btn --btn-block" style={{backgroundColor: "green", color: "white"}}>Update Profile</button>
              </form>
            </>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Profile;
