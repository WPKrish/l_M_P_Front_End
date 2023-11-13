import axios from "axios";
import { useState } from "react";
import "../styles/Register.css";
import UserProfile from "../components/UserProfile";

const UpdateUserPassword = () => {
  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("role");

  const [employeeID, setEmployeeID] = useState(userEmployeeID);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the new password and confirm password match
    if (password !== confirmPassword) {
      alert("New password and confirm password do not match");
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
        alert(response.data);
      } else if (response.data == "Successfully Changed the password") {
        alert(response.data);
      } else if (response.data == "Old password is wrong") {
        alert(response.data);
      }

      setEmployeeID();
      setPassword("");
      setOldPassword("");
      setConfirmPassword("")
    } catch (err) {
      alert("User Not Exits");
    }
  };

  return (
    <>
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

          {/* <div className="form-group">
            <div>Employee ID</div>
            <input
              type="id"
              name="employeeID"
              placeholder="Employee ID"
              onChange={(event) => {
                setEmployeeID(event.target.value);
              }}
            />
          </div> */}

          <div className="form-group">
            <div>Old Password</div>
            <input
              // className="form-control"
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
              // className="form-control"
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
              // className="form-control"
              type="password"
              name="password"
              placeholder="new password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <button /*type="submit"*/ onClick={handleSubmit}>Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateUserPassword;
