import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ThisMonthSalary.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const ThisMonthSalaryForLabor = () => {
  const userEmployeeID = localStorage.getItem("employeeID");
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState(userEmployeeID); // Set the default employeeID to 3
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => handleSelectLabor, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleSelectLabor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/currentMonthSalary/${employeeID}`
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
      <h3>This Month My Salary</h3>
      <div>
        <div className="salary-container">
          <form className="salary-form">
            {/* <br></br>
            <h3>This Month My Salary</h3> */}
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
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Month</th>
                  <th>Total Working Hours</th>
                  <th>Total Working Days</th>
                  <th>Salary Allocated Days</th>
                  <th>Salary Rate (Rs)</th>
                  <th>Salary Per This Month (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {labors.map((labor) => (
                  <tr key={labor.employeeID}>
                    <td>{labor.employeeID}</td>
                    <td>{labor.name}</td>
                    <td>
                      {labor.year} {labor.monthName}
                    </td>
                    <td>{labor.monthlyWorkingHours}</td>
                    <td>{labor.monthlyWorkedDays}</td>
                    <td>{labor.noOfSalaryAllocatedDays}</td>
                    <td>{labor.salaryPerDay}</td>
                    <td>{labor.monthlySalary}</td>
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

export default ThisMonthSalaryForLabor;
