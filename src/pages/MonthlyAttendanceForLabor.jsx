import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthAttendances.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const MonthlyAttendanceForLabor = () => {
  const userEmployeeID = localStorage.getItem("employeeID");
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState(userEmployeeID);
  const [month, setMonth] = useState();
  const [year, setYear] = useState(2023);
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!employeeID || !year || !month) {
      // alert("Please fill in all the required fields");
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      return; // Prevent further execution
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/${employeeID}/${year}/${month}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        // alert("Labor not found for this month");
        Swal.fire({
          ...defaultConfig,
          title: "Labor not found for this month",
        });
      } else if (error.response.status === 400) {
        // alert("Input Details Correctly");
        Swal.fire({
          ...defaultConfig,
          title: "Input Details Correctly",
        });
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
      console.log(error);
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
      <h3>Monthly My Attendance</h3>
      <div>
        <div className="attendances-container">
          <form className="attendances-form">
            {/* <br></br>
          <h3>Monthly My Attendance</h3> */}
            <div className="command">Fill in the Information Below</div>

            <div className="form-group">
              <div>Year</div>
              <input
                type="int"
                placeholder="year"
                value={year}
                onChange={(event) => {
                  setYear(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div>Month</div>
              <select
                id="month"
                name="month"
                onChange={(event) => {
                  setMonth(parseInt(event.target.value, 10)); // Parse the selected value to an integer
                }}
              >
                {Object.keys(monthOptions).map((value) => (
                  <option key={value} value={value}>
                    {monthOptions[value]}
                  </option>
                ))}
              </select>
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

export default MonthlyAttendanceForLabor;
