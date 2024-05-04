import React from "react";
import "./userPage.scss";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";

const UsersPage = ({ text }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="usersPage">
          <div id="sectionOne">
            <Left />
          </div>

          <div id="sectionTwo">
            <Middle />
          </div>

          <div id="sectionThree">
            <Right />
          </div>
        </div>
      )}
    </>
  );
};

export default UsersPage;
