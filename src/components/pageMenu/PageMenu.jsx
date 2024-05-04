import React from "react";
import { NavLink } from "react-router-dom";

const PageMenu = () => {

  return (
    <div>
      <nav className="--btn-google --p --mb --mt ">
        <div className="home-links">
          <div>
            <NavLink to="/usersPage">Profile</NavLink>
          </div>
          <div>
            <NavLink to="/changePassword">ChangePassword</NavLink>
          </div>
          {/* <div>
            <NavLink to="/users">Users-Info</NavLink>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default PageMenu;
