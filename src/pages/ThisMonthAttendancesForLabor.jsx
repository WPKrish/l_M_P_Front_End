import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ThisMonthAttendances.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const ThisMonthAttendances = () => {
  const userEmployeeID = localStorage.getItem("employeeID");
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState(userEmployeeID); // Set the default employeeID to 3
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => getLaborDetails, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const getLaborDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/${employeeID}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        // alert("Labor not found");
        Swal.fire({
          ...defaultConfig,
          title: "Labor not found",
        });
      } else if (error.response.status === 400) {
        // alert("Input Details Correctly");
        Swal.fire({
          ...defaultConfig,
          title: "Input Details Correctly",
        });
      } else {
        // alert(error);
        Swal.fire({
          ...defaultConfig,
          title: error,
        });
      }
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/user/${employeeID}`
      );
      setLaborDetails(response.data);
    } catch (error) {
      console.log("Error 2 :" + error);
    }
  };
  // Get saved data from local storage
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
      <h3>This Month My Attendances</h3>
      <div>
        <div className="attendances-container">
          <form className="attendances-form">
            {/* <br></br>
            <h3>This Month My Attendances</h3> */}
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
                  <th>Working Time</th>
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

export default ThisMonthAttendances;
