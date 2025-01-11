import React from "react";
import "./ProfileSetting.css";

const ProfileSettings = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1>MovieMancer</h1>
      </header>
      <div className="form-container">
        <h2>Profile Settings</h2>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
