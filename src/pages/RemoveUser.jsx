import { useState } from "react";
import "../styles/removeUser.css";
import UserProfile from "../components/UserProfile";
import axios from "axios";

const RemoveUser = () => {
  const [employeeID, setEmployeeID] = useState();

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:8080/user/${employeeID}`
      );
      console.log(response);
      alert("User Successfully Deleted");
    } catch (error) {
      if (error.response.status === 404) {
        alert("User not found");
      } else {
        alert(error);
      }
    }
  };

  const userEmployeeID = localStorage.getItem("employeeID");
  const userName = localStorage.getItem("name");
  const userRole = localStorage.getItem("role");

  return (
    <>
    <div>
        <UserProfile
          userName={userName}
          userEmployeeID={userEmployeeID}
          userRole={userRole}
          
        />
      </div>
      <h3>Remove User</h3>
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

          <button onClick={handleDelete}> Delete</button>
        </form>
      </div>
    </>
  );
};

export default RemoveUser;
