import { useState } from "react";
import "../styles/removeUser.css";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const RemoveUser = () => {
  const [employeeID, setEmployeeID] = useState();

  const handleDelete = async (event) => {
    event.preventDefault();

    if (!employeeID) {
      // alert("Please fill in emplyee ID firsty");
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    try {
      const response = await axios.delete(
        `http://localhost:8080/user/${employeeID}`
      );
      console.log(response);
      // alert("User Successfully Removed");
      Swal.fire({
        ...defaultConfig,
        icon:"success",
        title: "User Successfully Deleted",
      });
    } catch (error) {
      if (error.response.status === 404) {
        // alert("User not found");
        Swal.fire({
          ...defaultConfig,
          title: "User not found",
        });
      } else {
        // alert("User not deleted");
        Swal.fire({
          ...defaultConfig,
          title: "User not removed",
        });
      }
    }
  };

  // Get saved data from local storage
  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = JSON.parse(localStorage.getItem("name")); // Get String from local storage without double quotation
  const userRole = JSON.parse(localStorage.getItem("role"));

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
      <h3>Remove</h3>
      <div className="remove-container">
        <form className="remove-form">
          {/* <br></br>
          <h3>Remove User</h3> */}
          <div className="command">Fill in the Information Below</div>

          <div className="form-group">
            <div>Employee ID</div>
            <input
              type="id"
              placeholder="employee ID"
              value={employeeID}
              onChange={(event) => {
                setEmployeeID(event.target.value);
              }}
            />
          </div>

          <button onClick={handleDelete}> Remove</button>
        </form>
      </div>
    </>
  );
};

export default RemoveUser;
