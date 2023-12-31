import axios from "axios";
import { useState } from "react";
import "../styles/Register.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const UpdateUserPassword = () => {
  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

  const [employeeID, setEmployeeID] = useState(userEmployeeID);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!oldPassword || !password || !confirmPassword) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    // Check if the new password and confirm password match
    if (password !== confirmPassword) {
      Swal.fire({
        ...defaultConfig,
        title: "New password not match",
      });
      return;
    }

    try {
      const response = await axios.put("http://localhost:8080/user/password", {
        employeeID: employeeID,
        oldPassword: oldPassword,
        password: password,
      });
      console.log("Data : ", response.data);
      if (response.data == "Requested User not exist") {
        Swal.fire({
          ...defaultConfig,
          title: response.data,
        });
      } else if (response.data == "Successfully Changed the password") {
        Swal.fire({
          ...defaultConfig,
          icon: "success",
          title: response.data,
        });
      } else if (response.data == "Old password is wrong") {
        Swal.fire({
          ...defaultConfig,
          title: response.data,
        });
      }

      setEmployeeID();
      setPassword("");
      setOldPassword("");
      setConfirmPassword("");
    } catch (err) {
      Swal.fire({
        ...defaultConfig,
        title: "User Not Exits",
      });
    }
  };

  return (
    <>
      <div>
        <BackButton />
      </div>
      <div>
        <UserProfile
          userName={userName}
          userEmployeeID={userEmployeeID}
          userRole={userRole}
        />
      </div>
      <h3>Change User Password</h3>
      <div className="register-container">
        <form className="register-form" /*onSubmit={handleSubmit}*/>
          {/* <h3>Update User Details</h3> */}
          <div className="command">Fill in the Information Below</div>

          <div className="form-group">
            <div>Old Password</div>
            <input
              type="password"
              name="password"
              placeholder="old password"
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <div>New Password</div>
            <input
              type="password"
              name="password"
              placeholder="new password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <div>Confirm Password</div>
            <input
              type="password"
              name="password"
              placeholder="new password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <button onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateUserPassword;
