// This is used to show User Profile on the all users page
import React from "react";
import { useNavigate } from "react-router-dom";
import avator from "../assest/avator.jpg";

const UserProfile = ({ userName, userRole, userEmployeeID }) => {
  const navigate = useNavigate();

  const handleChangePasswordClick = () => {
    navigate("/changepassword");
  };

  const profileBackground = {
    width: "auto",
    margin: "10px",
    marginTop: "5px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#ECEFF1",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center-align text horizontally
    height: "180px", // Set the height to 100% of the viewport height
  };
  const profileTopic = {
    color: "#000000",
    fontSize: "16px",
    fontWeight: "650",
    marginLeft: "20px",
    marginRight: "10px",
    padding: "3px",
  };

  const profileDetails = {
    color: "#003152",
    fontWeight: "500",
    fontSize: "16px",
  };

  const name = {
    color: "#003152",
    fontWeight: "600",
    fontSize: "20px",
    marginLeft: "20px",
    marginRight: "10px",
    padding: "3px",
  };

  const profileDivDetails = {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "10px",
  };

  ///////////
  const profileDivStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const ProfileLeftDivStyle = {
    width: "86%",
    display: "flex",
  };

  const ProfileRightDivStyle = {
    // width: "14%",
  };

  const leftDivStyle2 = {
    width: "120px",
    display: "flex",
  };

  const rightDivStyle2 = {
    width: "90%",
  };

  return (
    <>
      <div style={profileBackground}>
        <div style={profileDivStyle}>
          <div style={ProfileLeftDivStyle}>
            <div style={leftDivStyle2}>
              <img
                src={avator}
                alt="avator"
                className="img-fluid"
                style={{
                  filter: "brightness(85%)",
                  width: "120px",
                }}
              />
            </div>
            <div style={rightDivStyle2}>
              <div style={{ ...profileDivDetails }}>
                <label style={{ ...name }}>{userName}</label>
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
          </div>

          <div>
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
