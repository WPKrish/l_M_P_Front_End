import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ThisMonthSalary.css";
import UserProfile from "../components/UserProfile";
import { monthOptions } from "../constant/App.constant";
import BackButton from "../components/BackButton";

import Swal from "sweetalert2";
import "../styles/SweeAlert2.css";
import { defaultConfig } from "../constant/App.constant";

const AllLaborsSalaryCostByMonth = () => {
  const [labors, setLabors] = useState([]);
  const [year, setYear] = useState(2023);
  const [month, setMonth] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [fullSalary, setFullSalary] = useState();

  const [filteredLabors, setFilteredLabors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectLabor = async (event) => {
    event.preventDefault();

    if (!month || !year) {
      Swal.fire({
        ...defaultConfig,
        title: "Please fill in all the required fields",
      });
      setIsEmpty(true);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/labor/${year}/${month}`
      );
      console.log(response);
      setLabors(response.data);
      setIsEmpty(false);
    } catch (error) {
      if (error.response.status === 404) {
        Swal.fire({
          ...defaultConfig,
          title: "Labors not found for this month",
        });
        setIsEmpty(true);
      } else {
        Swal.fire({
          ...defaultConfig,
          title: "Fill all details correctly",
        });
        setIsEmpty(true);
      }
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/laborSum/${year}/${month}`
      );
      setFullSalary(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Filter labors based on the search term
    const filtered = labors.filter((labor) =>
      labor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLabors(filtered);
  }, [searchTerm, labors]);

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

      <h3>All Labors Salary per Month</h3>

      <div>
        <div className="salary-container">
          <form className="salary-form">
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
            <p className="user-details">
              Full Labors Salary Cost Per Month : Rs {fullSalary}{" "}
            </p>
          )}
        </div>
        {!isEmpty && (
          <div className="searchByName">
            <label htmlFor="search">Search by Name :</label>
            <input
              className="searchInput"
              type="text"
              id="search"
              placeholder="Enter name....."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

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
                {filteredLabors.map((labor) => (
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

export default AllLaborsSalaryCostByMonth;
