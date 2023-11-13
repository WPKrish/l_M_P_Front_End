import React, { useState } from "react";
import axios from "axios";
import "../styles/ThisMonthSalary.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";

const ThisMonthSalaryForLabor = () => {
  const userEmployeeID = localStorage.getItem("employeeID");
  const [labors, setLabors] = useState([]);
  const [employeeID, setEmployeeID] = useState(userEmployeeID);
  const [month, setMonth] = useState();
  const [year, setYear] = useState(2023);
  const [laborDetails, setLaborDetails] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSelectLabor = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/monthSalary/${employeeID}/${year}/${month}`
      );
      //   console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        alert("Labor not found for this month");
      } else {
        // alert(error);
        alert("Fill all details correctly");
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
      <h3>Monthly My Salary</h3>
      <div>
        <div className="salary-container">
          <form className="salary-form">
            {/* <br></br>
            <h3>Monthly My Salary</h3> */}
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

            {/* <div className="form-group">
            <div>Month</div>
            <input
              type="text"
              placeholder="month"
              value={month}
              onChange={(event) => {
                setMonth(event.target.value);
              }}
            />
          </div> */}
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
                  <th>Employee ID</th>
                  <th>Name</th>
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
