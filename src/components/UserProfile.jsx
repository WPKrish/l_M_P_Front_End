// This is used to show User Profile on the all users page
import React from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ userName, userRole, userEmployeeID }) => {
  const navigate = useNavigate();

  const handleChangePasswordClick = () => {
    navigate("/changepassword");
  };

  const profileBackground = {
    width: "auto",
    margin: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#ECEFF1",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center-align text horizontally
    height: "auto", // Set the height to 100% of the viewport height
  };
  const profileTopic = {
    color: "#000000",
    fontWeight: "500",
    marginLeft: "20px",
    marginRight: "10px",
    padding: "3px",
  };

  const profileDetails = {
    color: "#000000",
    fontWeight: "450",
  };

  const profileDivDetails = {
    display: "flex",
    alignItems: "center",
  };

  ///////////
  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const leftDivStyle = {
    width: "86%",
  };

  const rightDivStyle = {
    width: "14%",
  };

  return (
    <>
      <div style={{ divStyle, ...profileBackground }}>
        <h4 style={{ textAlign: "center", color: "#455A64" }}>My Profile</h4>
        <div style={divStyle}>
          <div style={leftDivStyle}>
            <div style={{ ...profileDivDetails }}>
              <label style={{ ...profileTopic }}>Name:</label>
              <div style={{ ...profileDetails }}>{userName}</div>
            </div>
            <div style={{ ...profileDivDetails }}>
              <label style={{ ...profileTopic }}>Employee ID:</label>
              <div style={{ ...profileDetails }}>{userEmployeeID}</div>
            </div>
            <div style={{ ...profileDivDetails }}>
              <label style={{ ...profileTopic }}>Job Role:</label>
              <div style={{ ...profileDetails }}>{userRole}</div>
            </div>
          </div>
          <div style={rightDivStyle}>
            <br></br>
            <button
              onClick={handleChangePasswordClick}
              style={{
                backgroundColor: "#e0e9f1",
                color: "black",
                fontSize: "12px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
