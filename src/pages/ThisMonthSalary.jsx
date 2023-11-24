import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthSalary.css";
import UserProfile from "../components/UserProfile";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import {defaultConfig} from "../constant/App.constant";

const ThisMonthSalary = () => {
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState();
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!employeeID) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      setIsEmpty(true);
      return; // Prevent further execution
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/currentMonthSalary/${employeeID}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          ...defaultConfig,
          title: "Labor not found",
        });
        setIsEmpty(true);
      } else if (error.response.status === 400) {
        Swal.fire({
          ...defaultConfig,
          title: "Input Details Correctly",
        });
        setIsEmpty(true);
      } else {
        Swal.fire({
          ...defaultConfig,
          title: error,
        });
        setIsEmpty(true);
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
      <h3>Labor's Salary for this month</h3>
      <div>
        <div className="salary-container">
          <form className="salary-form">
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

export default ThisMonthSalary;
