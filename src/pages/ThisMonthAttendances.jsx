import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthAttendances.css";
import UserProfile from "../components/UserProfile";

const ThisMonthAttendences = () => {
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState();
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectLabor = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/${employeeID}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Labor not found");
      } else if (error.response.status === 400) {
        alert("Input Details Correctly");
      } else {
        alert(error);
      }
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/user/${employeeID}`
      );
      setLaborDetails(response.data);
    } catch (error) {
      if (error.response.status === 404) {
        alert("User not found");
      }
    }
  };
  // Get saved data from local storage
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
      <h3>Labor Attendances in this month</h3>
      <div>
        <div className="attendances-container">
          <form className="attendances-form">
            {/* <br></br> */}
            {/* <h3>Labor Attendances in this month</h3> */}
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

            <button onClick={handleSelectLabor}> Search</button>
          </form>
        </div>

        <div className="user-topic">
          {!isEmpty && (
            <p className="user-details">Name: {laborDetails.name}</p>
          )}
          {!isEmpty && (
            <p className="user-details">
              Employee ID: {laborDetails.employeeID}
            </p>
          )}
        </div>

        <div className="table-container">
          {!isEmpty && (
            <table className="user-table">
              <thead>
                <tr>
                  {/* <th>Attendance ID</th> */}
                  <th>Date</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                  <th>Working Time Time</th>
                  <th>Daily Job</th>
                </tr>
              </thead>
              <tbody>
                {labors.map((labor) => (
                  <tr key={labor.attID}>
                    {/* <td>{labor.attID}</td> */}
                    <td>
                      {new Date(labor.inTime).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td>
                      {labor?.inTime
                        ? new Date(labor.inTime).toLocaleTimeString()
                        : "NA"}
                    </td>
                    <td>
                      {labor?.inTime
                        ? new Date(labor.outTime).toLocaleTimeString()
                        : "NA"}
                    </td>
                    <td>{labor.workingHours}</td>
                    <td>{labor.dailyJob}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ThisMonthAttendences;
